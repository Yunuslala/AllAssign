const {ProductModel}=require("../models/Product.Model");
const algolia=require("algoliasearch");
const client=algolia('LONXBB8T1T', 'ef81787f92115702d824e8b0e6651588');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const index = client.initIndex('MyWorldproductIndexs');
const SearchProducts=async(req,res)=>{
    try {
        const search=req.query.search;
        console.log("search functional",search)
        const data=await index.search(`${search}`,{
            queryType: 'prefixAll', 
            typoTolerance: true,
            hitsPerPage:1000,
        });
        console.log(data.hits);
        if(data.hits.length){
            const formattedResults = data.hits.map(hit => (
                {
                _id:hit._id,id:hit.id,image:hit.image,category:hit.category,price:hit.price,title:hit.title,rating:hit.rating,description:hit.description
              }
              ));
           
            console.log(formattedResults)
            return res.status(200).send(formattedResults);
        }else{
            const queryData=search.split(" ");
            const convertedString = queryData.slice(0, -1).join(' ');
            console.log(queryData);
            const data=await index.search(`${convertedString}`,{
                queryType: 'prefixAll', 
                typoTolerance: true,
                hitsPerPage:1000,
            });
            const formattedResults = data.hits.map(hit => (  {
                _id:hit._id,id:hit.id,image:hit.image,category:hit.category,price:hit.price,title:hit.title,rating:hit.rating,description:hit.description
              }));
           
            console.log(formattedResults)
            return res.status(200).send(formattedResults);
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const postDataInAlgolia=async()=>{
    try {
      const index = client.initIndex('MyWorldproductIndexs');
      const Products=await ProductModel.find();

        const SaveindexingResult = await index.saveObjects(Products, { autoGenerateObjectIDIfNotExist: true });
       
  
      console.log({ "msg": "data is posted", "product": Products, "indexingResults": SaveindexingResult});
  
       
    } catch (error) {
      console.log(error)
    }
  
  }
//   postDataInAlgolia()
const AddProduct=async(req,res)=>{
    try {
        const response=await fetch('https://fakestoreapi.com/products')
          const Data=await response.json()
          console.log(Data)
        const saveProduct=await ProductModel.insertMany(Data);
        console.log(saveProduct)
        res.status(201).send({"msg":"Products has been added"})
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}

const GetAllProduct=async(req,res)=>{
    try {
        const AllProduct=await ProductModel.find();
        res.status(200).send(AllProduct)
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error})
    }
}
const GetProductById=async(req,res)=>{
    try {
        const {id}=req.params;
        const data=await ProductModel.findOne({_id:id});
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"something went wrong",error}) 
    }
}


module.exports={
    GetAllProduct,AddProduct,GetProductById,SearchProducts
}