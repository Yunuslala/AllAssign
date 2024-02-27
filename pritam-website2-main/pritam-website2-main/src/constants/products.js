const PRODUCTS_HEADER_IMAGE =
  "https://s3-alpha-sig.figma.com/img/7b6b/11be/60010eb84a501dfed61e3a3c3542b0de?Expires=1696204800&Signature=KN0ZEyK3rMjZCYWjsqDU~JJaQXgh7qrAG-m1dfCbNGt932ZiU7DRuDQj65~Wdjh5-WrRnMwBq80DEC94boNtPRNFkdjFKZSXOhc9Iyh03BlZdOuB-WQqPfkFi-FzEJi8LMJevKuJSzEgI5HLnFgJsuMzDRrS~PJTSb6MjVHKnuVhE80gPeH9X-UftcKDHBSWfNamvwz2N2bUEo9ukn6qKHa~2sOeHGutzTRl5xtH~4tmWrmJu0mbc4deReyyqLOJ~s3gsxm-VkSb4ox8dGXmDR0p-a7EMeBeLqNH2LRZXxjZ50o7Xi4xTxNwLPJTqAX5yC3ORlmmN8E2oLsgbLiFHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const products = [
  {
    src: "https://s3-alpha-sig.figma.com/img/7784/ada2/b07fd4052643e696c4c7953946322117?Expires=1696204800&Signature=EF1I-IGFWBAAIvK079xLYOxSJ~cMdLPxME-ya3sEi2ss~owFPjOBTjZBFe5QToFxvFx3spMW0oONdWmKOIOUOFKSEGLvnX7Hp3yCgQNV4v1hRFFTuw8CV8NRizDZWNcFodT1lbhmFqgbtDKOBdd2C6ud7plvuU0Llj9ubKUGHb8Gj95Mks8Kugy~GS3SdqotH94BE3T~6Fug07TIaTfXwc2mnFO1~PDtNsVECmiUg7vNePPI-YbrBTYz-j18xvOV0rIOE4wdXuSWebju5q1ZShhwcBv8tak8idxfe-DKUYY2DO6xvyjHaIYcp7rQBr~uG02lpcnFmG-fmBbYRkoUHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "ACNE-SAFE KIT FOR NORMAL OR COMBINATION SKIN Oily",
    price: 125,
    type: "Oily",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/4b68/5cef/77b6af2dc0ad2a3d928b53c422682e94?Expires=1696204800&Signature=jfe0-cYu3b6nWadt98cNQR2~VDKsIXCd8yLV3zRYZoqxksg6SX4Udd~idxzUXYuesGatvo6K3wdtcQeGhdf5o7yBMqX8BUAoJKnpn72M7tqEmkkATeUy5GEe32ObPn7QOaqDwnrJwC7QMYz6QK2xDONcdysbAAnlnd1QXOGF4qwdaZj92v8dFuA3GYfNfuKXVnrOijp0K8isSTH-2iTk69jd~5OWT7YDkFNtNPS2a5OEwqMRsErZUvkPFTMn4m26-dat6VnCySDvUho0vW9GBxZIhtemJUQsQapIAHIOHOtVZQ1B1OY9Pz3c3RvzZtOvlppcuLqBH1PKD-S6tq1lVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",

    price: 125,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },
];
const Allproducts = [
  {
    src: "https://s3-alpha-sig.figma.com/img/4b68/5cef/77b6af2dc0ad2a3d928b53c422682e94?Expires=1696204800&Signature=jfe0-cYu3b6nWadt98cNQR2~VDKsIXCd8yLV3zRYZoqxksg6SX4Udd~idxzUXYuesGatvo6K3wdtcQeGhdf5o7yBMqX8BUAoJKnpn72M7tqEmkkATeUy5GEe32ObPn7QOaqDwnrJwC7QMYz6QK2xDONcdysbAAnlnd1QXOGF4qwdaZj92v8dFuA3GYfNfuKXVnrOijp0K8isSTH-2iTk69jd~5OWT7YDkFNtNPS2a5OEwqMRsErZUvkPFTMn4m26-dat6VnCySDvUho0vW9GBxZIhtemJUQsQapIAHIOHOtVZQ1B1OY9Pz3c3RvzZtOvlppcuLqBH1PKD-S6tq1lVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",

    price: 125,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/4b68/5cef/77b6af2dc0ad2a3d928b53c422682e94?Expires=1696204800&Signature=jfe0-cYu3b6nWadt98cNQR2~VDKsIXCd8yLV3zRYZoqxksg6SX4Udd~idxzUXYuesGatvo6K3wdtcQeGhdf5o7yBMqX8BUAoJKnpn72M7tqEmkkATeUy5GEe32ObPn7QOaqDwnrJwC7QMYz6QK2xDONcdysbAAnlnd1QXOGF4qwdaZj92v8dFuA3GYfNfuKXVnrOijp0K8isSTH-2iTk69jd~5OWT7YDkFNtNPS2a5OEwqMRsErZUvkPFTMn4m26-dat6VnCySDvUho0vW9GBxZIhtemJUQsQapIAHIOHOtVZQ1B1OY9Pz3c3RvzZtOvlppcuLqBH1PKD-S6tq1lVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",

    price: 125,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/4b68/5cef/77b6af2dc0ad2a3d928b53c422682e94?Expires=1696204800&Signature=jfe0-cYu3b6nWadt98cNQR2~VDKsIXCd8yLV3zRYZoqxksg6SX4Udd~idxzUXYuesGatvo6K3wdtcQeGhdf5o7yBMqX8BUAoJKnpn72M7tqEmkkATeUy5GEe32ObPn7QOaqDwnrJwC7QMYz6QK2xDONcdysbAAnlnd1QXOGF4qwdaZj92v8dFuA3GYfNfuKXVnrOijp0K8isSTH-2iTk69jd~5OWT7YDkFNtNPS2a5OEwqMRsErZUvkPFTMn4m26-dat6VnCySDvUho0vW9GBxZIhtemJUQsQapIAHIOHOtVZQ1B1OY9Pz3c3RvzZtOvlppcuLqBH1PKD-S6tq1lVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",

    price: 125,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/4b68/5cef/77b6af2dc0ad2a3d928b53c422682e94?Expires=1696204800&Signature=jfe0-cYu3b6nWadt98cNQR2~VDKsIXCd8yLV3zRYZoqxksg6SX4Udd~idxzUXYuesGatvo6K3wdtcQeGhdf5o7yBMqX8BUAoJKnpn72M7tqEmkkATeUy5GEe32ObPn7QOaqDwnrJwC7QMYz6QK2xDONcdysbAAnlnd1QXOGF4qwdaZj92v8dFuA3GYfNfuKXVnrOijp0K8isSTH-2iTk69jd~5OWT7YDkFNtNPS2a5OEwqMRsErZUvkPFTMn4m26-dat6VnCySDvUho0vW9GBxZIhtemJUQsQapIAHIOHOtVZQ1B1OY9Pz3c3RvzZtOvlppcuLqBH1PKD-S6tq1lVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",

    price: 125,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "PORE REDUCTION PLUS",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1696204800&Signature=a9q3oL6mCJAsDvOKUelDAXjmAmTIKNck6KnB5qNzHcol~WPK3PGPWjByImTGwkF~GV64xbEPZER-dSihIvXzkhTNSR0ub3LTpQtuxePFLhae1O~geXdXzeHTG-Wpu0DX2LgNoamdq1GZuL52S~coijy0SQFYOA1QhqD3TR4Snzx4KTXaRWkWiDstyyQd1P0dH0QUyUvTUN3puSW5oSZ0MgrKCXCIZ20Br8aRYO7~l-YRxu4uN-OVoRVw4qM0T2gRsbg5JxojQwCIIRGHUpNhR4E4qvdU6cZOqet4UsAyziMSOsl-yJhsrRGYaFo126xn2oX16IN0nYZVPLqos12FmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "REVESKIN RETINOL ESSENTIAL 1.0",
    quantity: "Size : 30 ml ( 1 fl oz) ",
    price: 125,
  },
];
export { Allproducts, products, PRODUCTS_HEADER_IMAGE };
