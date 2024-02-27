const shopMenu = [
  "Skin Type",
  "Product Type",
  "Brands",
  "Skin Conditions",
  "Nutrition",
];
const skinType = [
  {
    src: "https://s3-alpha-sig.figma.com/img/b648/52cc/7c8fd67af4b9b66ca6ca25d8b6ad0901?Expires=1696204800&Signature=I5~3iE3jCs7LAqO6AfIJja0mit-V1mbbI2LtgDvsx48PHeVUc3Tr7fCEcKKo3vxFhRCHV~hvd2Efwn-NU7gST9yD9pEDbg2-MWl1fgKmw2kymgZR3m-fN4Wj0AmcK19eB2c4TTc3BUpNLFI4K918skGjlgAIS0LUlUv~l5V9XI6v1XfU0OM425THqRRJjO9qSwa2pjKQ-Uy7Tw5D1OTZblFZ1sfN04vRcK8QMXqApvuAVMCLLgdteJ~cpvwVtGLGWI02bjCKyJt5qcC6mgzNPUUuIk5nLArv86fWRC9emerKNcUSdPOnUjVULkjD1BmnPK7zgjt8uiJMsXczKr4WQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Dry Skin",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/72b7/81f3/7960c566c5228d3a34829ad98f29cbb3?Expires=1696204800&Signature=H4ZgqLvgv98dJtWcei7Q50~wsFveHzytXraoNs-BvQYh8Err0BJKuwH0wTJp6KXrdEmjTvxaaQX8xN5pZJlmSVHcb7GvwINpJiDkJhfsWA1dFJ1iTA02aWwRKXWPln6qVwiYOxPzGxmtMDqi6MAxbIupiLUmMcOFV~hGQ1t1TZ2Kgk0ycR~nztBBhp1aykpHnmjQUnY3rLjKsO29cvzlMAQOwrdO3VhT1eLTs7vQpUrZp2Ctc9rVKiRRq1bNceELq2d4DOoUCVg~jNjLSzhP0ldisZL9cc27VB-tYnqya~WBgNfUt8ouhOTlERIE42fG0tRHyNXscAN3Z2lOJi0wxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Oily Skin",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/9197/f494/71f43125fa10b3fbc791688adbed2208?Expires=1696204800&Signature=ox2rLqGfnWwnk2tKyRqvKHfWXgLGHAjIzWX4MrjbI2kjzVyNGZg6rZHGcsGBaceild5p-65jJIOZNYAbrdq7fsMwfhAWT2XevKAEOqCpfkHIycPnlH0TEKcSPUwR4ABJe8OIlvnq8kLSCGICvVu2yak5x7RXOs99oVI5Eb99Or8QJedqgpNj1cJACl2QHXVtHmwbWeEvIZ2AeRKnsCi1sYSbkbmcOrBKBqjmyetT8LdNGXLmP602nU0Mgtcl6NuvDR-DjX6ZZ~qe4BMOvyDRtMExgIrKiIYNmXja~glnzPofb9O-Ic~1FMGQ53eJWPhecZ4YS~AKqpZAGSaOVBhE-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "combination",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/6458/dc98/adb647644a2d8fe7d54c314dbccff04d?Expires=1696204800&Signature=MjHQKS6LHspsWoXxPaKP3c0vCpIqfBA~4jD0QgmZo1~oiK~UVFCBBinrIDLC3otwERdLj3Bq14XovomIxE8nzKO~g0LYs7tXNpgombPUtO1NGOPcr~nc6sp4v8UN9a0dsZtzYxSTuy5i5vwdKd0bSvuivWf9NiCYTtq0nxUkdVyJ-h7WS2Eurj~~S4WwiL2oVQZ~PrDqNZSZDXVhCpMo46J37g7qf6UNNSQDXMlvcZLV~vtt7ZxmGX4Y-ArinTutY1M9OXXB8rSkyLpUR9D1iiGaY4unYhaNX-9DpISb-RdhSVFse3Uf6Nh~5u8vvjB3CUpBqLPlG4qqWMvTQCk--Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Normal",
  },
];

const productType = [
  {
    src: "https://s3-alpha-sig.figma.com/img/845f/e47d/4b13746316cdc49164a4aa26854ec06c?Expires=1696204800&Signature=ZAZbTZc8dxYzhRSaNMTzklHrl2indeqbrspbRjraKqGfvnRidUxx0LCbtzWCDqoIFXOfGZqVk2QsGl5IZPQnBkfzA-k0diSfo~hA0HoFDqVbz5a4GohYeXQ1CoS38zjejjLbqOjOSEY2F1TGUudQHGA5mxUqX9DmC6KcMy9dQAIZOUTI27EveGDsclUBs~HY6Yumgv8Kw4A6mLPiShkOuphEnWkUT1WzLVGM4IkWhfsE6cZ-aluSIbjMIISE8ZWEAGi01T-1djl9kW98nhJPDlhEqwwQlLxpTwVJV~IoPEPO3YEk~Q9DlbT5QamwLm7BU9xU2BlxeXnkyVS~Js7SGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Moisturizers",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/b7bf/1f8e/482caf129bc4627a3ab09a0c43897375?Expires=1696204800&Signature=B3iKDlhzkuCu3Iyv5TXpAvUEn5QQG~vKT6kIVQwsZ4yg9rveAsJAcESp4kc7QR-nctbEKQVCZTB0AJYflyJGjh7JJVO8aAMpbdYAwszhaixKYZ6NogSfDEyIf4DPFRiPdE8qAlUpVlReIoCXYwMFdkOsbUXwEuuEqTinsTXGO7IbWgokQf~g3MGPDeg3givzpVyM12Rw~vriZqZXCBiyOLbIUdHQz-GxVJRJTcPHncTWfq48LhT6aPkns7YAQYjdXoLmucd6sBcbFwxjAga-HYKqr2Yu0eAVpwGo6PtW82awqxiPNHJquPbvXJ~a5U9Qnnlt9Rx89o~Mj6sWQpBnRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Serums",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/d161/fad2/185e5398625daaa5416d8a9fb7786ef7?Expires=1696204800&Signature=q9r0DXNtZPYAjhPNescltfXg65iGbt48~E7pc22fQZfjwChIfaV1qJkJpCdp6TFJLn7607f7xXHqY3zKAYwwMAaKbXb-S-OpHYhT9XwZsWfibl4MfkoAW4Y7vlF049NPPPZPb~q0O-mYWW04J4PKeYc5xHqqyvYbxrmd2~CPsTEyf-glVyvcALJx6tzGS302Z-wonE9ObcL825vNtgjk5WiIP23JBDjBFPUSrVYflhZk~4YIM5FRizCAj8n-Q5gKIE-fBALMPMS1znPX3Kxl0xZvqeCPGS9uv7EP-0SlsOXRzhjg1bXzdjo99BOwMjIJtvCB0nR06yYguimbU5vm8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Cleansers",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/414e/8744/dcaedc289d5e0321159225ac70df5e24?Expires=1696204800&Signature=l501qynhN3kfEa-KHMOYydMooVFnQgRYuwbnRX8G693lbpSHoAsn69nonU0I4RCr3z9zmqnTNwQkNENwDRb34nAQCWY7N13a1gx8kGiAIaMoB959xYtMgnG84QNXzhYsmVeH5QvDeX~-ugyh8aoU5ofP2xMir74a0JZe~~V5EsXW-II82YlvGmawgakUYCSiPz6FaGn-DuC0llnHiTXUuBRRW6pLRHYaMjzjh1zvsf92nnbF5wG5rrOe1ZZsTUfCoDcA8ZJ4aEb2YKJ8Io30icjLLN4RKBmWXw9qD~i06yVko1shkn4t7n1MWXhGE55Fh08BI5-HXAp-ALmYWKrPZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Sun Protections",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/61ff/b89b/caded8894a1fe7322a100646306f8b60?Expires=1696204800&Signature=PbpNHWO1rq4-ZioTMVBN05MoOAh8vZ6hZN6CFrBTmpiBxjDkDA707z9KPlM81G5QhAMWzrdVIXh~L9mNMRCH0VbD9wOErrgEDXBLQlcKZVdJawt-553SLvAU9VZZSyXZ0wPE4xzAPZ~~kH9F8IMI4gq-N0TvSIL1KCvYqC2mtF4GSfCakTfbhgzSImsTWDA3Ok9il4Nbaf2S-~zaNxzHfYyjXpmlXOiU2zFhdCKd6vVoL~FgJc0wloWWr~ZEv5ZFUGF1A3lSBtMVS1ncwNnWYAo6rgSK6O2RJNGSw-f0gGgfv5-aqbpMhxdknJlr0M54FDxRluongFqJXOetCGQB~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Toners",
  },
];
const brands = [
  {
    src: "https://s3-alpha-sig.figma.com/img/39aa/2200/cada62e7b6a88845d85116555ac83c79?Expires=1696204800&Signature=J9ijyYwCPBLV6FOEYUModBVHvj~ULRkOU0VYDaab1SdC78MkZWqj3wB3Nu12-Q-tdtWyehjO41jP~sSXL2sEVcWgQikFkuE6VKKNF7yyYG7DRznet99154zBA8ryw~89Af8YlPweIYvkcv6PAsa-yOk9-U8~wBGGUXoSdHtDmSj0uK8Yxh11K8y52nZstcpI5baRzTUfljQWtLSif-~uPaeLzhChVGWIGkt17bMxG0bD5yEIQEHdkF-~idamjfQHv48yxprVRpA2fefCQ3zshQVcQHdJjDqzVyKLwq-HbSBTPL5prgkyzSWbLr-tMpyDULNOnPk33Fg4XGqDOHOs4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "DMK Products",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/fb15/f580/0f1722434998c1a7641182616940829e?Expires=1696204800&Signature=i-nJzIg7dBcb-utMSIdP6Og0JWII8xaruy8X7hE9CHDkKpKKryjuzcAeOWX0r8abgzmegxLtjDQ5qADpty6Aspy~UmRiTf5OZiRIQl-DyIPnJxDZ2lpO~nQ1oLuG9MYs5-ePsADN5tCnZSUrtrMWC9NJWZzVoqXGrtzdT~dNdJKivJT~3nMWjmITokMqbO-aZ71xXXKlHk9qw5K5R7LAPE~BFXVitUO~GDM9BzCmTR3TM90WTKSvCvxXkmHBRU3riUmF5i0OuEcDZQ5DBxAFcf1B9asxy2hnaiyQE6Nk5w9GKfiEVVJEvUn4xGfyaK-2XxPYeQwICn2-HJXlyYQ~eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Face Reality",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/ea52/f251/2e5fad04d2c596e98ab78b386e153687?Expires=1696204800&Signature=XTv65gqy18vg9ZdJBLPPz6~QAbe6A6AWzaAWlAA1IJ1fLCe8I7JNY2kCjdq2A0ec48KMa0bbWZKSHDEU1Y09ZAOu7ZrSyEJSD7CpgGQ-yICwKSm2lPio4I5T8WKIERLt3dP6nXDVflGN-4Ypv0OBrnoUm-N77obd~XUV1txR0V7QACQf92WFoXQVTySQWqnkxFoQ4L3q~netCVUMQN7ac17GaairHxRemPI45iISOoSMajGW5vlb5jOelhwFaBfeBNuU2D6DCfRcesV3R1kJAzXkjFXFb~UzoSDqlBMtBH7RGhc3hunV0qmor5-7-jnhZRU7Ow~gLWTU8NahdzNlCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Reveskin",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/1844/bd83/200912cd6b14e09d50591a4c0e0d9176?Expires=1696204800&Signature=mQ0wMUlCiEl~baqy2sz7-MVqnm2ZIR41oMb8BGgUqV6r8O2r9vE4zcnLzx83lKs~a-fnA1~RjxcK9xxWTGd6lFqh4DI4CkS4ggJBPUhfWA4qLwl5J5bd03L3r50YwrIoADjvhIEwNs8RwycZ1In~0UXJMraax82DwhtVNn0mEYkl~dpz35sOLvk7VWhe1bsswfTSa34fCM5qM-5~0cJ99O1Jno24Q2mNoi5OVVjXxB0N77GwUTDOe0~4qRLhKLFxG3IStAoHou8VhQLzJOnGUb8H4fHW8r3HEfbCPju4WcE6eJgaSnEz8fHWL-veWouL3LpmPl5JRdDqj8OYr9sT0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "CloveHill Spupplements",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/f91e/1224/55d86926a01789f8f7a63b27e69518ba?Expires=1696204800&Signature=lZVNAZy0mdq4IrEJYs0mkSN79yPnG7TxrZ7NbV67-Cfds1DKQR405ytuDDaMc9CObiYWCTXBAYy5XMiJSSpJFk0C0ArhUmktyWse8OETO35jQ-Wq7kyaunojJplvYY0NR~jNsarX-KYMTap5LTZhrJjEeHAkBjdOAxoje1qWP7ap2I2LoYRhxzRR6He54Pgdxpf~mamWFNg0VlAFp8W08PjrsdfQR0VEgKyIRewwGxDHe97~KCKH1ZkdySGmhlc8o85SBXWrejrpxNSBB8MTT53HR53f02-~BtGwh2dgA30IzYnJLDFIxTl9kgBYhXvI7x8nysPtyK0rZjHYTPHajw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Skinbetter Science",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/9174/6e0c/cc53a48d043d619e8cb8422c80ea8459?Expires=1696204800&Signature=h6JLs-Nesn5DxiOYSSFseY0xbyWrB~rrKJKkH~dyQfP0OSfY7tLmRI845S1N2bxhs~zan4-7YhvlNqrXrZ2wk332In80ENOW8V-SJExPgUhTVNXlbrJlpTUtw~yeAZu1ej92XBJ~rLIGKcG57qrWL96mtLlnBRomSFSS5x~lOlaF9rcs-0IC~hpM0vEMIStSbRdJazumNE-MF9slr48vNjrj7lgC4vJtLbrE0PyVhqjyUlRQ3euulVVCw6o-ZOogIQ1oJugIC01Limu5-vFphJWxlVahaQTiIeFbtQ5Hv4l~DWfLsUQ3uaKdrphtWPWmAFss0XSOkQq3AK3MOchJ5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Revela",
  },
];

const skinConditions = [
  {
    src: "https://s3-alpha-sig.figma.com/img/ccf8/68cc/af75195a9556cf4d3a415d658062de0e?Expires=1696204800&Signature=QzBIMarA4E4uohtzUSGpuFExdbga67vrkyzQ4oNruoBNAZffHiygMq~lrSZSgGlQZTjlfScoGojLCmgeZhsvkPUN4oLjRZLFS9s0xQ~YedXtNmu98TL4BfUlag-KeL2vI2P2ix4wcLUgH-p~FRJy4QDQ60f7u7vTRCxYFQFZ65fuygmfC7~YRE2NQtHWzSoS6RrGLrnh01~fkCrs9kGTtscxgw4bm9IfRmmtsBzCTwvS~XEV-lwbQkSwy8uhNbuoDZuMGNlsOV~2yDGkIdSYZKepXaX9Pt89iSl56KOqZT7RUX5IrJRbcnYQCgSIl3xwnglWQ~6192U2tIvFwyeuvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Aging",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8500/a542/35fccc4df2fa5858688276e69c2d0416?Expires=1696204800&Signature=d9GmHF3WTpBMjxPE8w8WL4HFyaDwGcxmHl~qnP0LSDjWf7JmfuXmR3LtDt7DWj4Ki~7J1XabW6Ghsn~~98tFsBcezUiFOIj6zxAWodRpj~1M~VEIUbvIjE~T~nDAur6EL6TcvgSTABdHi-cf1GLeglhnwSB3I-o~obsa0BkalhYX-Ob1CTS6ozUCCy~9XPbQOTXz4tPfR8OWXip19dVh32a9F2EVl~qRx8zzJvS4N921i2e2ABD96J-aVp8UYxO4jni~frMXnjAsLFYyES32c1-Dwb2d9FjKqs8tiJPLcubtX1iBum6vcpCVLwlt6wqdDvPNryYzEGn0B8QDqrJk8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Pigmentation",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/ef9e/34da/4a84588380afc366ae2d19ef5aa157f5?Expires=1696204800&Signature=Z764DT7t8-FnJO3UDqE39lCIYiEHjbc9ramI7i7tpvuCF6OtNHhB6Ha6DtiJQG5nJmzQn8XyRPak8hyJipq5LBeDxsAKZVrFyKF7Y7Rom9EUUByVOwaMO~qa3cxGTZJE5YdO9fQVlt4R-PBuYf9rpQp91ZSRQ5DgAHy0y14Jz8PrbIg~mMhLgv03eGcDLI7qxEb-ystzYPwdoaeERxSfWY1c6nFxV8j7SiaJW2Uy58edHyMrzYylgEA9wv6Iz0BAqO94XJQdwKX84XR~YYRUQcHhhZx4cdX804Pqx0PeGXa7JZyTd54wLEANeZ1u7bOCXkdpvn7skqTSJ7~REKfKXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Acne",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/6952/4848/04ba74345bf7985ba6c502642ea796b9?Expires=1696204800&Signature=qxph9RXBKKGHBijWmhEMzaDDXu2UEAbb7SEPCYBQAhhxgrHp3T9qpYwSHrsQUsn~F1k-1Zz5tSCBDrhsCIKS2~dKI3KRm62oLTaqDJW45TxAqcrkR6KlqEg7xJKR4LverQlSWJZvYCVRhHE-z-4H3GssoeivyrGJl9c9sScP4N-0aLbNq3jXIacVTIM5KRoqn~KeKq4YQYpqrW9a~1MXVlV76jUAHitZ~AvsN~FJgU981PhhAAQ-yZZ64KJ3luytUlUSep7iwg~fa3FiEQpZBsQsK2B04WzmdDyKPcgu-jkJCK0ZZPkpATS6gsQHOLUxw9v8bTin0C2h7kuYdC6YRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Rosacea",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/e452/f448/f22e2396c73071a242ad1d099b7bfcf5?Expires=1696204800&Signature=aWiKl3Nkaz2qg3ia8Wlm3dNnt1NBVyHSwPg6AjAoQ-tltBQg7EucxXiFQeqCEGqlzHjRdPsiGYUKVNPV~BiyW2mSx1au5UksVfXKkyqabFGfiFGd0yAh0918I1Kvywj8y63j796kznsefq21BglXEZxMl1uoSnimRxuT6fIf0fZ2qRUJcAR5Ko5b5S6tIdzuD~c4NAPBrOWMoLw6AGP1Ek0wMuBZxVO1h-mbQZD3tP2b8aV6sIWujN7aHzd6DxMt9RFsdl-vWZ6yGYC0rXo1yB6RH7Yg0xErLUYS9BF-kOyFeY2AnDs2jVGQrQTU9gc3do2h8lxUPw3Evtoa6e12QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Sensitive",
  },
];

const nutrition = [
  {
    src: "https://s3-alpha-sig.figma.com/img/9aee/63a2/06983d8d20a6781e7df021f58edf2ddc?Expires=1696204800&Signature=BzVEDF-R9Mj8O7PG4d6Mw5A52R2VoK3~KHU9dZGQpLeP5MEsp51HxLtaiqq4C5l-eNfbbXohvzRYUZb89twhAw~UdTkTlZOldXaacjIWiJIgzI1Q8d8Q-Tkx6gkVlOwlAzxcAzEZBwEWVE2WhlDcErwI2ASj-rh~ng56xzG5LntRHQHDZKUQJ9L3h7CEt7KeZZfEHBotnhls-ym4KjaOzUwlPp3xYCBYVyILBaycof1KjlTegCZg3ESW2khrWlwAfZnujtQWtjZiCxfvYYWyLP6ERh7P8Vino9T~GgU5u9lwmVxgVR~QV77ek2JW5tGmC2op3ZJaj0CQAPdajeI4fg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Skin Health",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/99fd/2da8/d67f43da6bfc1d103f7445d4077c09e5?Expires=1696204800&Signature=q56PL3tmGGZH-GN0LdF~Yxe4ExPMHUIW7T~NBiadkM1AFtLYDtlhj80d1Uiu8COmooKaVSbv602OSmB9gkVhkhyhSbV-kY8hx5UmK093W-8cOvAHdLITF3dfZ4NdqVCastM~CO2iE7sh3RZQ3EcSTJymUljjLP1CPrMINmMxd0dMlKREEItlp4b~pykAAHnpQ5smWwx0-fD8m5IeQPg5SyuJcbDu6FT6wQQ2TY-3smIX-GucZW4He8HiK7LxDDBSy5WAkUridl05~2qEUkhCwTva3fyuES8w6E-G-TCgHLQr-1Temn89xClwXAeyA8L3I5hMe6rjyocfS3qYiulljw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Immune Booster",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/2b06/91db/94e8eb4b38e3d54793d36f42ee08d405?Expires=1696204800&Signature=OFsdjpu5mPlcYbMKBk-uTx7BRwNCjUwRXexqmDurWpWvgZRxRMUgLU06xV~Agj3lKXjNxiC9l9KWN-uVuoKKBnMyYk71eIltCtf2SgTuTyXlIhFNor4RXcb~c7X1nGGLc-14NOwpnXln75b~OU25Xb63LfSGW-AMAhXAZekcOi15pzHs8PjCXaMOLFLlfFsuqo2yBBkxDfXSWQwr3jWJzVxGBiqvT3EMJLyxVeIsOITak2Wcj-l5tf-f~KF1vb5CFRqiRa8im2msDvNw61UeTciVQRy34l1poiGeeL9Wa4~5cm1dhVnaMPzEoMYNzBl-XfaC0X7NzL8mOLFN6hp7dQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Hormone Balance",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/03d9/6925/095f8c93f5dd75b67416b427dddd5bcc?Expires=1696204800&Signature=pVLAS7nMn8Q2SPzgKan7XSjcQDSd11SfqNb4fCIXXWbmFCP4-GalesdGuyiGCLbsBg~NrmmUbd90Rb9vITodwVWquppFHd8wBd05u6liu6Vb9UPVHietUxXZRZMgENoiDEAw3YdAQqMEaBkyLMNk5xM3VmEwknChNKH2M2kdwnlpfByYDuaAULK7svM8ctzLpYPJOHHmclkejfTlbGtN8MOypAHGR8ANsNJDyHOAsoMol2jpQIvFbtzXiM5hGfQvTMV7c4KYTTw5F9-W8KrAV1GBfALz4Fm0DF9Gy3Ge1czJr0cFAiZociwwK0IBnHyVbLlSqbERNx-D9zVSBRuTfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    type: "Digestive Support",
  },
];

export { shopMenu, skinType, productType, brands, skinConditions, nutrition };
