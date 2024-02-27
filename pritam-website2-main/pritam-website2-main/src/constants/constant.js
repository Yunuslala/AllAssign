/** @format */

import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { PiStarFill } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const ServiceCardImages = [
  {
    src: "https://s3-alpha-sig.figma.com/img/0677/4150/8ab9a9d80196a8fb9f01e940dbf0d7e1?Expires=1696809600&Signature=qcTk1q0hf7A0NZG9GWsFF4dbTzOdJg-92ksG4jQ4gAHEtQVyYWqDpOUH0C3yaoknWbxf204Pa8XvcVRvlx9AIZfabpqcrDz2n6c~0r0dPk1A8HdXGxoYT12Euo7hdqtHS4zl~Rr~XpTHtP5uoKemksZ2y--0v42l8-EkDbxnEnS983a4QmFAnu8yQgF7FwFXQpkX1Bzrbol-Ydw-xrbzSYjmEUK8GRMKhpFAjAocHJjXkIwIdP~57TyvHuwT2Gy1Z2Vvctck7NPh83-IxpsekhVEWBu8w24bPStkaj8KQ4h3sNhws~DcTc9RoWKuHjFF2LJKtGi7gDPaZTmW~le8lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Hair Loss",
    serviceImg:
      "https://s3-alpha-sig.figma.com/img/2ed0/5a42/ddcb0da77b8b5df74db48a4a6b31d30a?Expires=1696809600&Signature=GT-KP7FaamEBKREBElpsSM6ityGziyGo33WxhfaPeUmwIGKwM7IBSn1RbBnlGJJSxVFdjIYFaoQe6fETl8hzWZA4yt~OgHhvfTlL6SzDb3j0AqfSW1cKZkQLM0g8UlHARcef0q~s2f4FUMoXwPSCHMNAWcb8sC~nVNme8sBIfwLjCaqG1m90vdVKcPbaSgldEVLEyv5-dGcKK3bb8RSNYrTRCU2P8f6wOcCHRYlEc-Ni22A7oDcRZ1P6bmF37uWXVa3Mi7ZuEyJBwGabON5fh2JszlmhBWeoEcxbK8Wldl-r1Ta7rdenRENF59SAR5WML9xr8FxHGZKsAFr~fTzKsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/5c41/0b62/48165230d1b4763459c0b9d0503e0b05?Expires=1696809600&Signature=fOJBYYZ3QI35iuX0wxKPIUCQUry7Zln5YYG-i~-JEtcxyo-GrI2GnqkImPjXdwQY1os0mKEGjmdyJVDqss5ER-JeA6Zfb~0XFDx8i~hYopp9p8bNCBURsMgUND5kK-4jF--M-boK4m-WmuXjO5BLwiWM-lvwaHEYnTISMt0FmZt1a1gYaMr4KGzUNLOFfpCXBjgALgnH~UxUIr-gbeik6ZP-bKbMkK6r1d5DX9Pw1HeQmTg5vo4kF9WA-7cLjnbpSxQAsep~XR6HAnWNT0bYcLDPYlXHsyHDjE-PgqZlKEWA3O9Oax--paM3glhpfnfaLkfF8WIVwGnTh61lPoOVYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Pigmentation",
    serviceImg:
      "https://s3-alpha-sig.figma.com/img/ff4a/1be1/e8b007079706f91b11351456377c85b5?Expires=1696809600&Signature=avYUT8q3p4JXNdaB5~QGJiXk8PHYDm2zee2-fhT9YOtzq6QBx9Nbp1emLIEQ4itQYo57Gisxyeb1b7eVknNPdPGKyNubsM7El8dFHN9VIXKX4W~UMmm~PomlPvW~eZMg9sxtsbRedFVtK1easCiDImNhKvbjeSGevZot2O3o~FchBVVS9aevNHSA8dZs5T1qHqApdjzTv~MsfmCWnttN17Jvq6VFdN0ATTVQTOuEQ~HdGTHPZ5Hxml6UDKscw8y9hBbCthml2o0dl9yqNulOWmysyeMxxISOrJkpkAb4FoHmkExSYKo2Si6Yyu-dD8hZcEKc1n5-62e08Y--O5TfcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8d1f/0c15/fbbdbebb3f93e537f447b4fdcda75b81?Expires=1696809600&Signature=k7Pw1NTG3~C99AatrBbWT3N-wSNCqUzF2EYlsvhfahGwptUzFrhu7pmFyn9GgjrY4482cVJb3~NiAxXH6xX24GkGw~uNGs9y91UziDuOfCT1g~SBMW8K5~TlVqB-aYjYmM69-NIrSdRQpr~R3zAmSc7uFbU4iA54UTiqfVO~oASG7nQ-1nBns1zh6~xJ1HLh9YLp5gODW3f0rRbRJC6B-OdyjtSq4HNMqqizWYrFycPpKZHdzvRN9ekv5kWgscbjEn0QGYb5N0XFRd54I32UbOhDE5MPcpe9QV6txZdEsqBR5zP6KRtGrdxGtdampPd9~dXXUE5Wdli0t0K1f3sUqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Acne",
    serviceImg:
      "https://s3-alpha-sig.figma.com/img/03c6/fa27/830b0a0716bdf2d066724f286a594e31?Expires=1696809600&Signature=ZS0gBEhbOhmQxK454VVrhCB7f~y2-TDovPmuqzusvxfThPsHcABAaY8xruslckqNEnogpdUtbnKw1cVLAJzrlT9lpQ2rKAhNECh6m~1IFd-OIncnVwcFzJGU6uCEki6K8X4sJxuZPV566IepCJsbBvqtmxAkq482mR1p9vT9AhCtdTwGFOWDbaB7IztoWL1YlxnboWOKBGlbvhWupQSNeGijN293fFayzKVD0ZYISPqQE1dYpY743sWTiajjixMeuuP8iuHRToPBMpb9DCDNdIP5~wbYMcfgm7YFi4J9OksPJ6fKKcz-uqnGH7xST0YCUIhHronPJZeVFxcAxN7I7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/4817/731b/d3acaa81009111494bfd9a5a63a9ce7a?Expires=1696809600&Signature=Q90IfpgrfzzzyZaZCRtUZ5lqCZ0oaLI8e2GAscy5q0hTYcLoDhpzv2q5Vudj7aPlIektiuZFa0YOoNydH-p8KfKPlGhpDcBjurj7Xq91Qw1Zg1PNjwSMfyRYxvfcXoDSgtjy3snQKY0iEsA2jcQai002mUl5Ok~DW~d05E84i3r523Bc8UeQmY6rWKcS3F4oCn9G1knBBWVawjV8cxeIu3UX9KBOk7ZXbRucMStXfJ4WItmzuwU0vzbpau0j4x3vHeg9OXvR5HEF~gYVtp77gBMuCakuomuevRnycb31iZmAa~u9wdZaFU8CvcxN2KzzmQ3j4m2Ud4P1hygI5-6tVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Aging",
    serviceImg:
      "https://s3-alpha-sig.figma.com/img/cc60/92a8/7963e7f2ba9d35dfe0cb4ddff4deb583?Expires=1696809600&Signature=OOXl01e4qyEkskTDH9qtR5CmJ5S7bhTo1uSNbtQptSjY4~1KOxQBBIqG~NJBzN5RNviMRCuJaLlMT169xnRoJSJpfg8658epyiGkt9Uah8O4wkFO7r1SztYg~juxJoDJ2a34esHFL4FuqH94k1pO6d9waMWnDxtMMVvh3lRFtUgdsnGX~S38YJO-VKEAyoFNgvPlkH47lUrQQZaxd63OR6UZINTlF5RBNEw5EtqMmbmwgWrPAo~AqCWVYXmSHNCP2Um4jh0Cxflbg-TE0UIC9qNQzaRgOtoibHtf0XAtEb2Z5sfOqQUhSA6eMM7EW77V~EOzsqzfDjigOMeA63yMmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/3804/b0a6/6f1698dffe01fc5ae44e540d0c25a5de?Expires=1696809600&Signature=pnthW4FTXCH5-oCj1mF3-WSNI1DhlyflEM7zGjrA4cQ-g7snuslJEyj02rrDc7LSm1Z07RKdp-tXUSQtGG2A~kgq1oiSLRUX3JcC06uB7qsOBbwxaRg7PsPiLdgi8aS~awm8ORP7sOUIvUbZFHKwj0nuMwmpS5kmWrzWCzd8A~sHMrptNwsZ5ARjG8k5M7LIgreZaBsvh-iLF1qxbtHH-rcjjwpkEeW08M2KWh7w7BbsSTKR0UL3PYjmcij0UvGHPkGAfS5gT3qROE61mhuC~4oLgc94MO4BM1xMJ0u5uaeUzyTEgWA0NBMciAC5TWd3bh6xOKTlChZExmM952kXtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Fat Reduction",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8c21/d76f/78a90a74c6a4a811449adb050f2605b8?Expires=1696809600&Signature=U-io03CZbTAhpQBNdyYyaDD2x9JzUdCuTeHC8xdBzkNoO78bY~hJlggM00sTzntaViIieCbGllOaUeFgBhS8NAQ0y8hTPDhuluMp8x~LhUP4iyMSAuMrYxYxk1x~GgsG4BP7fayUI0c~~0v6fyiW09j46EHg0X17Wgf2xg1VtpE6Cs39jS~fvwAbbHemj2gdchlwHV~STAQb54KxkwKduzvNtHaDtmeKDnVehimkFk~ebHHx2gmQlINOOFXOQU5R8tmVi-h6ZiA3PSfIWmmyRraRa-ypZRkQb3YSsu~0yDXemwOunovl2vZexW5xlf3ypi-vU6L03uiQx~YsD7bf8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Acne Scar",
    serviceImg:
      "https://s3-alpha-sig.figma.com/img/7229/9b32/6647557fb5510ba16d272868682ce4e4?Expires=1696809600&Signature=Q~hduEFmH4AsAWWyqclumsyjA-iHlfYMsDOYVa16RenYqOUpAsvSTeFUggQWTC-mj9XsShzdXvDzDb6gelMk-9ruze6sQo5JBsEcWy1udb1x~9-5EYjhX7qVRVnzbLJ1O1LChAi5fnYpR6-5ZVxVLFXSHe~SKUcNiW2JFzLdK7FO7-AXDWeUUFCxsc4HzfEkmCfknChfZDgEexu9PKxJUz3xh7Go4syzVGrh3t6Vr5QvCyvT9ixWmFM29c~Y0ucKAnrwWRTnhDjDK97F5PuKQ1fFkZ4CnDpziPuzMAVUHUqxS5w585NV1qMEMYdoCTH1QeYP5UnGjAsHiBl8-zDWmA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/b46b/41b3/cedc4aa2ca105e35a79d81cad7b24d85?Expires=1696809600&Signature=G1NJblN0yiBX5vS6P9Pdubc11YJBQ5I2vSZFiWgJhlN7bx~PnkcXnT6Or7aijHfPw5SflNe6fBkbTps5leX8D3EXyJwfMEIoSLlOLygcaMcVMZ41XOcEh0rMVANbDTce07tQ-5bf20z3V~paIyNE953FF9eqBCwsqJZLca7UTMqy~mmssLdsxS3zBFusrN1Gg8Izp6ZpWyK6bv3kG~jwYqE4IqzvPksr42hI9qG6xHr9x1pLhofnSNHS-YBl2A2zm3fpZNS8QHeXoLPlGl~4THREQ0zlreCpoxgdGuEYVpsYYSa5a1ZYl1xWF5kvRkCuIKFVCTQb2A5h3~s-18B4Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "Laser Hair Removal",
    serviceImg:
      "https://s3-alpha-sig.figma.com/img/78a4/4306/87355f9a5c51ff073ecee8d6fe13c3d9?Expires=1696809600&Signature=l5SBORAxC4G0QqdwGlcGDOgR5njYtvQmq9c0XeyjYaiSUPwGtZOxxTcDx~RaJTe1fWarHGbybVi516-426aYGjbqh6ow2lbDQun2J78XADVdru99tsbEFPkX9co8S9eTAMLZ94NkzBhJZ2fCxDRyMQtHK62YStjRw5oxVXeFgEKxx6WdZh9Mwqv1pS5Jn7HGsEKRbUAkW0plUchPInskbhO8yaO16K2VjuZnpRe5W8mPmhSWO9dwhWCPF6BPxsZgkZ9EAQvYqzPPBUWjYRxWWwBJOsxlU1-SP1ze1T8NrMXdj7GUtt8B2JdcPJThrNilZzRnx24P8qfyGwAO9cQR4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/bc3f/2aad/cff57b10a3331b29b4ce48cb74b07651?Expires=1696809600&Signature=fwklXunNa-3OucnTtC~KYYejXXH-XLwKDCYFkB-tOH8WcX7xOp2cDM1rqPOYqM2ErXGFqspAfCoKXY7IDFw7596ukJgMwKUnJlSUaepOvMlnGDhv2b3uVSesxBYvkEpfat589YY9EEUFuf3RbyHLf9LXoMNmC~ykmsItnylhEGO8BtcsAJ-woKlSmQVWjF4KW8BEHsf17CluPOI6q0atqgZDL-WAoEpV3IxRGkgrSh9-CHl-jcwXfzTv7ocRwarwnpHvTNbgKXd-iTr7T6HYUO~JOtpDhoV2I7MR0p8sYKyfSD4q7OtpBU4A2mnjxaI0E89k3ivVTgfW4IbzAP4NDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    service: "IV Injection",
    serviceImg:
      "https://s3-alpha-sig.figma.com/img/7b80/30ca/2c7e4d36b96353debd45052c04031c0b?Expires=1696809600&Signature=KmS1d~yo60puCzdt2jUiDJp-hX7yoPK1vUeBV2t2luOoFkA8p3TAS34OpYG0n6NNMq3q-lgsFlw4G6ArTDYErlzJWkOwFALRv7eOmyC5bfNVp7sz82dnWFiM8leso-4Eno2zrCvbjJSXDmsVd-Qrp2MwDK9yrZu4MgA4hB~N7D01txUZVoIh3qpaZ0FLLkncgwZBXIrtNN3f68Fpv0E~6DqJf5JdXvMVZmBHVEXqzNwdEZG54xU1KGKq24oo0FZJTHEy0sbu4xUNCynui5Tc2w3x4Vkitz23NuSEpGKHutnVwlPU33ZLeBX2sY8pno7gtBpkaCt9qoT-2WqDe8LS4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const OFFER_IMG =
  "https://s3-alpha-sig.figma.com/img/e1a2/93bc/fc06329d69926d35461101cc1a257b0a?Expires=1696809600&Signature=Vcmbyn5DW0ZupJ6WF87e-Lh-6Cc04NFLW1dI-wbBtlCSvvAohhUpIJvKOJLmUCVVGyRDjiDPRIX64NniZsOUlwdDy7EnBaBMqFBDivivOWqNN8uHrqUnyQqdxMfc7e07CIpYAsrS1OYdwQwU1-K9Y1DJfUCtDPpJ~-JMvAOfM-kj4uNvBAzyy~nx6KPPuH2Q5hbLvx1DpoYJPRV7GXIvaxPNIXPaItjUbS-yksapkL4wvdnE7MZIK-bLJ8JaGN~e-SKYUtzBIIgrCwFS00KPJd3fiDpzTdmjmmxdS1b3RGLeA8nPb3dEydUzeC72~SqvVpCzSlTvJt6Rre9ECyIb9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const partners = [
  "https://s3-alpha-sig.figma.com/img/29d8/6c80/1ab96a64a96367a7c827e6f78d5919de?Expires=1696809600&Signature=KIZD1fZlP3ClWmF7cqJTvbcyuKMDaU~6jl7JRQYKOy1NdzF2CpOo2siVg8w9-NBl4r-ipbIfIdKCFkOaK3AoRkiWi7lhNSlG5KF2v9IA7YpwkJTwJ85~EoBfsfKKHv~YxpN11PioKuhnDsxdO2Jb7LKVEtsgVSuSpiYoPAVALPNvco8W3oCyNoL4Pf3JRdakbTIcrZs1fC6Ialx6oly-ijNAch2LtMQ9zwDgpm3KbvBV~rWbKDcCDfUO7bpx04cVuGNZujzOFHoYDeum8POYQpSicINJZWRiZFwVhsJtjnFhHCJU6xDSBZRM2r8fCwy9R2bDMWUr8IlM3aSSqf8EoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/16de/64fd/fbc675c266f288c1b24d4582017658b3?Expires=1696809600&Signature=iPlmNfEPfUI5bGlKBzkgoApjzN9HnnbRPqv67r4Af9kOiVeMGBuCjtnLkggU9I63uGL8g63C8povGZr5-qHRujIwHCn~CiNOozSACU8kmJLFOIIMwv64xvMBfdGFFSCDtmjUxtH8JBV4keEHRbl6qdCAf3Zexyj4kNXnRkwn09WxE-XOzyOdBzQQKQlGTNaTTBTlGeuGtTlwpY7bPf6L3~HsPKd81twrepTCOdNAStU-lIO81Heq5Iab5N3avuyznZUZP0Nej6NBDgpt7WBBjR0usi5K-dPp-W~FXSDzSTd9ZP~LGFfmnUOV~UpX0aTyNS2mcfRQtM7mghf4J3y7LA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9fc1/eba4/74c8e57d3edaf0cedf66ce4efae37e5a?Expires=1696809600&Signature=cn9jYBiKTHtxZe9clky~hzksNg81-nHY3xXf6oN5wH33O6BbLr9GCLqOfIzaQG7-xC7PJB85L~pdz9jdgwne8zhk7OkTPpB4aZTslwAY3rEbUC-PYpvIC2QdNdNobkhJnxNAzRYd6Ar7lpRs60f7XNnO-iYpdNme9185Oc8M0me-MTdiPeUJJGTlTFuTIIurybGLfCWu~CW6lz9skMTCjqYQnuFFhsB2wAe28j2fhAYh9KuE6fx1o6WL3NhF3cSoshDmCfe9pRCK~GcsbQtYc4BHqRIQByG9vPxoBLeOggio8qHb-eq9Y35VY7PNGDlaLQYwTVgbK5l8dmNU4RSI9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/faca/179b/91e87643214d7bcf192d83846f92b156?Expires=1696809600&Signature=Z~aL-ESuAeWL5XNCjFMnPpfd~lhpusVPxkXBVuoglB8nKr-F7b5vzuiVDat0WuGrWHQJga~ky5K0q50J5EyflpCf-VPYaCVDkgRY0HGjJgvcVng04CR1nuJynq5yKU0jbsSktY4jmE3QmRGr9bp07kTrNGMp8KJe4vmDXEcV497asFQCKo44FMj3Fovmj4-DTI7FMA058UizI8oeJEt1qPDmv57vzQ-PehG7E-jRtIu88~Gssqs8CFKrrheLwoKZ~fn89tprqSyl2L8eKKd86JTCli-eTlJJJVnS61kGLMGN3ccxfRLBBxjIbwvcEP9rD4aO22Uhxv7m-kTzqpX1XQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/5d06/760e/d5bad843bfdfe4e52a4da7c77bd9d40d?Expires=1696809600&Signature=V64sv4kEFo5JDQcJ~sPW-Mhd1TIu1qaScKvlqmFpgS~Yd9lfkyVGIOe3LupwRWVUYwU6VWyTZyDJG-V~HRn6O~GkqjA2iwLwrt91ySfud6i~UDmelPhdn3LuMb5keaWEdzoHQrIaUFZMWle-W7SAcA37SubWhBSX1uWhj-KFhFjEn~c0XIbxzClaM5hw8i07l-dPvhqvooBpnCyOv35kvwmps1gENyyyg4mOhVNd3OKBVlSMVnhxfyqnMZPbYBGIUvGYFOchKIQbwSLvAT61AUg40Y672EJUi2mXIQ77vmE2V3Dy0j-CALaVZcy3OgOBSzhlw-pt~k9IrBpNbdLYOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/9409/24ee/1a9776f86534125d03b103171428150b?Expires=1696809600&Signature=VF8gXlM~60gckY8QIgOTszyCxqv5Xrt0oPjWW1dUtLd2hbeozUhgrvRjAeyfvmAeprkQ51z0iP3CkqX261CQO58hAAUidiZFS06XbXWvMALAJ314T2-0jwAv8azlZV1IHFaK2JJcMivt8AZi78-uBl1AU1DsEQ2EzMzFVYrDdNQ3RfXXRGKf4Yi8ESJl0ihea4UD~-i~Us71UG45Uoen6RMIpXqPD2aH5M83QBj9P5KQdvz3sabSpmWwU~JqMNz67X6nf8TxLfOSpyteiV7WzsOZzL2CTnkz-PO70cHznUsFscUUqCNRsXOsEH9Dw7w03j7PmWpxSRTm89IAFzu7iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/1f5a/fa56/1b26d364ef832ded93d5cf4bae4247fd?Expires=1696809600&Signature=JEgRIl1qcuWKd28QFLA2EZj0m4atcpucwCyK9umLkPHEZNcuR2OEV-6jS7xnFMTDj972MVBxdcXTQlSbdAV67vpiIJxvifQFmEGbxPz7M2o1-IAD7nAFSoeDWO8u~ETWX9gcAIdB~6Sg8Llc~EiC-sSNoIJL8GuSZTj4RI7r8HsjGsEf7G4SUFnjsZEltBQi~FatE8hr0l8jABU15L3-oFkGedbNUZu-EDldB9utZ~hW4jPYE-Brl2a4TRjkQPDsJNgx3f-SNgppLU~QY13m7HN2bgjHCSG7BPgqfzijc77rh~AwrGoQBpevDTnyLYqJFoBqJryCeeOcqaAXY1WO2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/f8d0/e2e8/dd18a52817cf64e6575093ba1df34943?Expires=1696809600&Signature=ZH740li3iELR2OSWhhdbvnNjqot~DNFZFJNTs8luHdRSuR5E3xEZdY0k4uUjqU~MIhlU~fNhgetfg0WTL30KV89VVrYTqNZibrENsd8WsFk6oaxZVcuNv1dFEMrxnLfvVBgSXMp6AgiGoGHJvtCL7YItJJsBqs9VtAGDmbsRJoQjbPJiIcgobeGofei2KD7V257kQ~LybIhcdJqVeEziC~EFMDZRqlb8tXxFownX3YEusOQI7Ug3ORpHLZ3AS~zN0SUDlxWP4YurdlbLl~M0poxknSvh427cUANGL9e~Ke580oOTR~Ek-VDZjPHMlfJVVKRdJz4yC5~KM~PSD0c8Cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/66b1/f7a1/bbe662cac1b9f1e544cad0c85f7a7e3e?Expires=1696809600&Signature=UA8cNnJf2BrIsF6RbsaAzRyuLo58tbxDm1ljh9A000klYhp-bhLkILZ8oOEWbUvIS0JmfXdR0-SjsIuU~E7Hbs4ZdztboTgTFWF4VcYQYonT3FHHCw~VOMHUJmXDooG1BPYrOQAhpNx30UpkFMas0f8S8z8CTsyyHp~cE0R7UEAy~Hz~qKq6m0-bQ~20Vca8BFXKEmK4zKKnX7qw6DwupzCkbonvRw5Q8DoojhRnp3CUeHoIXD-ZoH0IsIHvJC5CaGN7o5spa1obuHlYHEi3E7wPm3cMrYXKGOfp62TRQiXwNl2KLpkJrR8htORRcUTxbOXEe0us-7OgejKX2qk4Mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/3eea/d654/3bf764e23b6b185a161e1aa239c3c273?Expires=1696809600&Signature=FGDnKskUijRr-GARKC812E1jbaSHQcb~v9srJVwThQgMRxRIhOLSg4YJVMN~YwdP6GTVTkMDUFXfpjzRF6umNhvW8J-QBawHS8XxxiqwyXoQBVPwEVGw9t5BsVHof3~Um4g7Czz9MVFMm6KI5qAPV8rMCcrC8vVACx~e9KnOtRJCWJhOAqZYPstRP124dJ4-t3SFpuAbCyFeiD6DNLPhIUZAIwxSWvgDa0BV74yWfpFbpfjbaYqJ9ChpXURKf97sLYZ4FEXLj2l6m4s8zLW~2Qsb2KqTWS2EyF-BLC7UOx64Xr4fZBPFsfy0RcgU9hu6ynaDDglU73okvN0xQuZ7Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];
const OUR_PRODUCT =
  "https://s3-alpha-sig.figma.com/img/b45f/e173/82b3f89f94436be693ee3a512f45dcb8?Expires=1696809600&Signature=Fu9xXKWWckrTLXexQykIdI1cKyQr-DI~xpkjWVCTrC~lwrKQq5nAp0GFe6lV~GRGWmxF3hm4bGv96exC0lwzzQdBDQir~1MAkfRVoUA3VIaxsh0jZvoD9kPqKOR7dQDIpxYYji0HGFMyx6q7yleJsfAP6cSZTpjU9kPW9-HnA95Tqukz6GvvlEVZGoznD-dyHeBhO0bVRk8HUigPmQ7Zy7ky-kU2UE6efvwj2nUjyhCo8G9O7RJNj7TTF-TQEy6JXlvF55Xx32TgEkPsqtB2uQE7n18PGEAQWsGnepcaHI1ZA0EyTxSx9CoDB5OwoJ9ZPJH2VAAsz-Dycg7kocOrkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const WHO_WE_ARE =
  "https://s3-alpha-sig.figma.com/img/0677/4150/8ab9a9d80196a8fb9f01e940dbf0d7e1?Expires=1696809600&Signature=qcTk1q0hf7A0NZG9GWsFF4dbTzOdJg-92ksG4jQ4gAHEtQVyYWqDpOUH0C3yaoknWbxf204Pa8XvcVRvlx9AIZfabpqcrDz2n6c~0r0dPk1A8HdXGxoYT12Euo7hdqtHS4zl~Rr~XpTHtP5uoKemksZ2y--0v42l8-EkDbxnEnS983a4QmFAnu8yQgF7FwFXQpkX1Bzrbol-Ydw-xrbzSYjmEUK8GRMKhpFAjAocHJjXkIwIdP~57TyvHuwT2Gy1Z2Vvctck7NPh83-IxpsekhVEWBu8w24bPStkaj8KQ4h3sNhws~DcTc9RoWKuHjFF2LJKtGi7gDPaZTmW~le8lw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const latestNews = [
  {
    src: "https://s3-alpha-sig.figma.com/img/3c46/2883/d5d30d58bd93eca65474feedc16054da?Expires=1696809600&Signature=Hx4EDgeiFBywxsvrEMLWieuecf8RBvOyMMDpvILO93WMuY2wGchsZXjaEX3vVZsrrXu-ofzjvyhO-pCzOL~gxClS77uAQibAkkfROUFBsxwRn8PN~jkoRDOUIiC4apZXSVhAQswCk3sezOztR1MTjGogHoDWC4zY~2CM1VUdw2ZLa4issDxHcwvVEpDw58oEuXaKK-yBkv9lEVm9jSf5Ct1j~ZznzJ2FBfizaWyfY1A3MsuJjsUWDQbk2kNqJzE5WIpI824FMD8mpV2aBiD2RJ3vSAedZ-tlTVWLyrbNd0IdZBNmEKW8X4hgXtxUXmb0LQo9uGBVtb1-qGGMHqklrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/e871/9058/5ff7f219b9fcf1eac085a7dcdc690073?Expires=1696809600&Signature=AqlUn3wmNk7q3An5BU18uzQUsDQE5qmxdJP7G6OX7iGb~YgUhzsKO5qt9aNRoTg7KEN2g~EGgS4yaYF4mRZIh44z54Jgqyebhk72xvFs3MCp8-TiPCLDzeSl-GAbcYjqDWAAZng-3jxfCz3M9xfOSrEY3WzaFg7w5-g6Hlb8WEG0-IBofFA6gLLqqb3qJxCl19nqPxQFmrEBKOPWQaQKw4I08HoLknVNzgOefgS~ZIgfldsT1lZtP4ftTrqr1UwL~ji-DrLyu7RRI8X035yiz8hCQ6FPPRP14dQjSP226RY2TZVU2Lu~WHR19u5VZURVxfrKqn~w3OskgSbfewH5SA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/6b61/ebe6/3d06888ee2f470727473f233176bcb20?Expires=1696809600&Signature=UnM6NcglBCeBL47CzoCSj35LYeYO4gw0nV9IwmTUUzvg-~r0H72f2cJJfa8Pycq1CVybHYxpATl06ibeeb26GCAC-xZEW5Rf7iMSInUfbPY5Uayq0T6ZqxhFMblJx51K5sVCLwxGCA9ytNVwIbB9VWzZJpVKeqbGKJUwCSR24Q~GlgoeGO~1uEvJQxPNLKnbxHdD5Aq4FfUxxFIkk0pHqnTWDUrpQw5kaOfbBRc~v~lUlPij47ysATpdWORdg0KnS7p-ITcYpmU5NvYldiRkHYzeA6y~eqRZY0LIIv7YGL3j0MIOEFMLb7pM0UP2bGCz~BnDlD5ZVuBkXLHslvf6sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/6b61/ebe6/3d06888ee2f470727473f233176bcb20?Expires=1696809600&Signature=UnM6NcglBCeBL47CzoCSj35LYeYO4gw0nV9IwmTUUzvg-~r0H72f2cJJfa8Pycq1CVybHYxpATl06ibeeb26GCAC-xZEW5Rf7iMSInUfbPY5Uayq0T6ZqxhFMblJx51K5sVCLwxGCA9ytNVwIbB9VWzZJpVKeqbGKJUwCSR24Q~GlgoeGO~1uEvJQxPNLKnbxHdD5Aq4FfUxxFIkk0pHqnTWDUrpQw5kaOfbBRc~v~lUlPij47ysATpdWORdg0KnS7p-ITcYpmU5NvYldiRkHYzeA6y~eqRZY0LIIv7YGL3j0MIOEFMLb7pM0UP2bGCz~BnDlD5ZVuBkXLHslvf6sA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/e871/9058/5ff7f219b9fcf1eac085a7dcdc690073?Expires=1696809600&Signature=AqlUn3wmNk7q3An5BU18uzQUsDQE5qmxdJP7G6OX7iGb~YgUhzsKO5qt9aNRoTg7KEN2g~EGgS4yaYF4mRZIh44z54Jgqyebhk72xvFs3MCp8-TiPCLDzeSl-GAbcYjqDWAAZng-3jxfCz3M9xfOSrEY3WzaFg7w5-g6Hlb8WEG0-IBofFA6gLLqqb3qJxCl19nqPxQFmrEBKOPWQaQKw4I08HoLknVNzgOefgS~ZIgfldsT1lZtP4ftTrqr1UwL~ji-DrLyu7RRI8X035yiz8hCQ6FPPRP14dQjSP226RY2TZVU2Lu~WHR19u5VZURVxfrKqn~w3OskgSbfewH5SA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/3c46/2883/d5d30d58bd93eca65474feedc16054da?Expires=1696809600&Signature=Hx4EDgeiFBywxsvrEMLWieuecf8RBvOyMMDpvILO93WMuY2wGchsZXjaEX3vVZsrrXu-ofzjvyhO-pCzOL~gxClS77uAQibAkkfROUFBsxwRn8PN~jkoRDOUIiC4apZXSVhAQswCk3sezOztR1MTjGogHoDWC4zY~2CM1VUdw2ZLa4issDxHcwvVEpDw58oEuXaKK-yBkv9lEVm9jSf5Ct1j~ZznzJ2FBfizaWyfY1A3MsuJjsUWDQbk2kNqJzE5WIpI824FMD8mpV2aBiD2RJ3vSAedZ-tlTVWLyrbNd0IdZBNmEKW8X4hgXtxUXmb0LQo9uGBVtb1-qGGMHqklrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus viverra nibh, nec laoreet nisi maximus porta. Integer vel laoreet libero, quis varius nisi. Cras leo erat, cursus sed fewrw",
  },
];

const pictures = [
  "https://s3-alpha-sig.figma.com/img/cefb/252c/c6ff445f8ab83dbc1e38bd4cd28c7295?Expires=1696809600&Signature=qfhrORe-a3iCj4OX~WJPlhjnsFSyqNO1hfgkoPGsEkZnT3EUD27SLR8eEHwobpsaMKU-FCbSDO9VcpB33dJp-E6vtl9DNgONCdZsH6dt4WzGk-8QW13iGdLQ8VrQ3-xpC47nHXHaRnyShEInDLuAOtdwLASyjbgZCphjVWS6Mb069r6acyuGOMmKMfxFKUS4Wdcm7LeS5aWTZv2mK-quzXbHIMrFrN2RnU49h32H2MDhyWEx1WepCKvvtyzgOdrRUUjmes5d7~0~N37jL0iAXCqP93U97sBaR71qj12tesIrRME97ED0LVANbJ1blNWN7cl95LMYgkv4b6GZPhsQRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/4208/ade2/b850b705f32e673c3f8153f791b59430?Expires=1696809600&Signature=gpqI-0ZpCyDuBPyqIKZVdmsaYnZB5dKsuAxARwJQrdE4wFYV9K2u-wMfmOKD1UUw8Hq43P7RNhoBjwv4edfQL2FuSsInSPiyrYzw5SfflLSH3mykGgFJj~wdoRZ~ZNUMGNJP9tCHH2XDo~bm0EeBSFWZ3~NGzKUVTk1nd4qte7N2WBQdYc2~AyLnZcWqgLXraoDZr3U-Z3o9IRqLIp6B2U5A7zo2~muRHCI35k--f6NJN9-CD2OjDNwnwVFG4TGRqeINo5UfFYyjvmpUJ8hybvFxcn08nYvq~LkRZIN2alsgZsGOU3PEyREmJ98e-AtZXDJe5gXkQZzmrD6tv1J6gQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/e738/757c/9b48fec2cb21e6c62ec950544b2ce26c?Expires=1696809600&Signature=oqyf4PfsFsJNW1QL3NAax56DTkHZOTEfys3LJ0lLD3JCY6RrnxsuRMaot7e9qNui38H3POpa7Tc~9nBP-JhNcalx6-y249hqnFhtg~PV01gP6Z~YO~vyJclJe0jjbIPfahJAszmlA3i2Hfs5DLWBfR3R7vy~xlx8muE0~KdWjJQj8X8NjYE11LSdAwAp-fkRnlLJqJJ8krE9IOHtZnkURe5bWgiOErmoT1aWislihO1J6KfJxh~PWVG-2eREl23eLSsXdxAK43ctN2Q4iHeG5NYXAu8e7S71W-Q7IEJFZhlON-~a8wdIhXbbWARnAG7e1Gpb~nTRyWfZy4IgrCimKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/d704/df32/c3cd07712387413c1e6cdf36362d2934?Expires=1696809600&Signature=YKTI0HQVALbMo-iZjRMtR9u026Md6OXDeFUhRsoUzXH2OSX90RGVU5S-Y~HcZAnmrJtoq1pjQSUjlFRsdKLIXOSMLbp4Hqz8~nMqhwPqzLN7VWEnZZUlUqYw10xuLwSfI1lKB8jA5h-DTRVNktctqIe6bQC~xb5xi6KoBZVokPYIdUeeg0RtEWIU1h5UgHzt3xNL~uPLz0u2A9xprMWQET28wAurswc2vGpOWTUEp12fbkr3CFYUtXaIcva0O-SwfHDjFH7teQcqERAYZ0m95OQkqMf3Tl66Y7YAx2KJgQMMdbVoBNduT3WCWrAMdmcktSr3~bpWOvJVwEVjlgEHTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/969f/f0c0/8fbb7ddda7e7b8e0b94e755f27a32cab?Expires=1696809600&Signature=mXCI7CQ9ofR25vrQHxj9wjuGXKDzodepI1ndVkoV9pti94c8JOOXb8OgBBHnjw59bALF5Jft8-MupDRjLvK4HF1P5B9k3TGWi6dXjqt0bNZTNIEOH4fmzXFUxkPTEFzOmbQpyTm-Rf7L~gTyzqAYh4WBiNgvNheo0bICQem-yyHjCWhP063QdtY1EWB8QX9qbfO7T3oALkCOpwxyJMxu9zHcmBa7saZeiZyZHqr~Dp9CkvIdRatzmQgqSLd8FQqi0clxWdla8mrPybyVRYsxk-ITyhToe7NQesRsW2BObYfr0Wq9wx7OT21VQ6uTG64BmnFLDklsO8X-0kzxigG5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/e738/757c/9b48fec2cb21e6c62ec950544b2ce26c?Expires=1696809600&Signature=oqyf4PfsFsJNW1QL3NAax56DTkHZOTEfys3LJ0lLD3JCY6RrnxsuRMaot7e9qNui38H3POpa7Tc~9nBP-JhNcalx6-y249hqnFhtg~PV01gP6Z~YO~vyJclJe0jjbIPfahJAszmlA3i2Hfs5DLWBfR3R7vy~xlx8muE0~KdWjJQj8X8NjYE11LSdAwAp-fkRnlLJqJJ8krE9IOHtZnkURe5bWgiOErmoT1aWislihO1J6KfJxh~PWVG-2eREl23eLSsXdxAK43ctN2Q4iHeG5NYXAu8e7S71W-Q7IEJFZhlON-~a8wdIhXbbWARnAG7e1Gpb~nTRyWfZy4IgrCimKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/d704/df32/c3cd07712387413c1e6cdf36362d2934?Expires=1696809600&Signature=YKTI0HQVALbMo-iZjRMtR9u026Md6OXDeFUhRsoUzXH2OSX90RGVU5S-Y~HcZAnmrJtoq1pjQSUjlFRsdKLIXOSMLbp4Hqz8~nMqhwPqzLN7VWEnZZUlUqYw10xuLwSfI1lKB8jA5h-DTRVNktctqIe6bQC~xb5xi6KoBZVokPYIdUeeg0RtEWIU1h5UgHzt3xNL~uPLz0u2A9xprMWQET28wAurswc2vGpOWTUEp12fbkr3CFYUtXaIcva0O-SwfHDjFH7teQcqERAYZ0m95OQkqMf3Tl66Y7YAx2KJgQMMdbVoBNduT3WCWrAMdmcktSr3~bpWOvJVwEVjlgEHTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/969f/f0c0/8fbb7ddda7e7b8e0b94e755f27a32cab?Expires=1696809600&Signature=mXCI7CQ9ofR25vrQHxj9wjuGXKDzodepI1ndVkoV9pti94c8JOOXb8OgBBHnjw59bALF5Jft8-MupDRjLvK4HF1P5B9k3TGWi6dXjqt0bNZTNIEOH4fmzXFUxkPTEFzOmbQpyTm-Rf7L~gTyzqAYh4WBiNgvNheo0bICQem-yyHjCWhP063QdtY1EWB8QX9qbfO7T3oALkCOpwxyJMxu9zHcmBa7saZeiZyZHqr~Dp9CkvIdRatzmQgqSLd8FQqi0clxWdla8mrPybyVRYsxk-ITyhToe7NQesRsW2BObYfr0Wq9wx7OT21VQ6uTG64BmnFLDklsO8X-0kzxigG5~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const paymentCards = [
  "https://s3-alpha-sig.figma.com/img/dca9/9f94/8e5578b7ddb396a7a9904728cff839fd?Expires=1696809600&Signature=dTbvLopN0vSE5rYm4oci2lCajLRXWW8FZYofFCCWEIu5apNqxgrh3o5x5y5pXLia83Dp2-LaMwCrlvU3RLDyv8vPHW7x3AxUDa4WWg15didUfeZO3EiLnvd~hx66EssivyCfydyGHvijtlvnp8bm~CtpZjFme-5-~XJxbhWxR687JCiMkItEn3s~vwLSsTuHiKWmYIxdCUqvbNpg8s-lRhEW2O8l0GckNweN6HjaYwXFPGDGFLivAySMotQjbRx96-m2G~EEOgORADiVJM0a~CMvgBxLoIi~XVzFBKM2~FgMpfQhou8WJ3AxD6XTztvDSkY-7FuEjVGqcpIsbXEkRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/8ce3/5781/c6fe0f3525c82aac0757ce7300414261?Expires=1696809600&Signature=OhGSGa92orCzGi03iI5-Ce3JXFh3ylPfc7h8fzslYHZV7gC6Q1dvccN-m0~Iq9T2encOAPrJf4bApBCccQZJxyEXN6hd4NaWH7hH9ulheCJNe3rFTWTZx0DkyXna-iInCr~PRtPCjftKuZcUDeiXiExiFziAgDT8tpWQs7b6fKREdLeLcrb6aOkgBALvjYthfaWw1vB4KWPXq14H4doExC7oyQaE8IRAjdBohleKZVFJB3GR8boZkKjkbqoQLVj1aopKTsphl9zBfizIW0j0la8mDQIX29t0AnWo5JWwmLdbDyb4XsdUQXsLrj~U-NDXCt4PFRikW9cVq6gR0xq5bA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/f558/9e28/02e05f3269fb3187765895bd3c2a3655?Expires=1696809600&Signature=ik-sgpG6mArURsHMmP3Z~8n7zNgtn9gLf8becyZJG2tJwQmyawuHBzTkKZYGJ4yoQCYn17WIVjvyMJsxEIJrU4O-NAFy09RnNau5g8420gobEKjEbPdrF8bUmCmmTjU1GJ5bcV38NVjRC1NIVlIZQek8ZuJuquN1u86k6KaPyV4fowz-7D-gls9wV0a~aHTq~lH7j9v-j0YNSEaIpHU7LmbKMrw~BdL~FDnMdopocJtf58iNwNxnnH3G-OMUJ2-v7ejT2ZjEQQUyfUcAaF1cXnUB3U5-NurjhhJjDvC96p1QbgboN4dbPPkArMzturvhsoOVq-n29jSXtOTb3znY5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/5d79/9d37/01bf0be10ffc9e331bdab9ffa09487f8?Expires=1696809600&Signature=F3bYTBm8aOROQfNSe3oGkHCnM2l~qftUKhxzgNWKdbTrrHtUHZErnQpDAa2zopzCEHNDp5y3z2J6CWjaZGBEORJaN9B2mDD0KAk4RUGHEMWxbg31L~Xwztqc8n6Y8XTeHVkh6XJ15PuVczeiH0PELnP6bwBJInOrWAxjKfV3iIFLhsf852AWHOYXZcwnRSPUxJ6HYtYaJQCLl9dxwYXke8Kzjufav6oXm8kXJMnmyvD75Gil8zNR9kN-BwqI27N7Cecsl5IGMsumBLjcTuP275iUMzK15QwUsZds2Ebo0la2HpRZ1wjCGgVJjKZslTqWvE96Sy9ozxFjGDrI3w-~NQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/5d79/9d37/01bf0be10ffc9e331bdab9ffa09487f8?Expires=1696809600&Signature=F3bYTBm8aOROQfNSe3oGkHCnM2l~qftUKhxzgNWKdbTrrHtUHZErnQpDAa2zopzCEHNDp5y3z2J6CWjaZGBEORJaN9B2mDD0KAk4RUGHEMWxbg31L~Xwztqc8n6Y8XTeHVkh6XJ15PuVczeiH0PELnP6bwBJInOrWAxjKfV3iIFLhsf852AWHOYXZcwnRSPUxJ6HYtYaJQCLl9dxwYXke8Kzjufav6oXm8kXJMnmyvD75Gil8zNR9kN-BwqI27N7Cecsl5IGMsumBLjcTuP275iUMzK15QwUsZds2Ebo0la2HpRZ1wjCGgVJjKZslTqWvE96Sy9ozxFjGDrI3w-~NQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];
const footerLinks = [
  {
    title: "About",
    options: [
      {
        title: "HOME",
        link: "/",
      },
      {
        title: "ABOUT US",
        link: "/aboutus",
      },
      {
        title: "SHOP",
        link: "/shop",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
      {
        title: "SERVICES",
        link: "/services",
      },
      {
        title: "CONTACT US",
        link: "/contact",
      }
    ],
  },
  {
    title: "Services",
    options: [
      {
        title: "AGING",
        link: "/services/AGING",
      },
      {
        title: "ACNE",
        link: "/services/ACNE",
      },
      {
        title: "HAIR LOSS",
        link: "/services/Hair Loss",
      },
      {
        title: "FAT REDUCTION",
        link: "/services/FAT REDUCTION",
      },
      {
        title: "PIGMENTATION",
        link: "/services/PIGMENTATION",
      },
      {
        title: "ACNE SCAR",
        link: "/services/ACNE SCAR",
      },
    ],
  },
  {
    title: "Useful Links",
    options: [ {
      title: "PAYMENT PLANS",
      link: "/paymentplan",
    },
    {
      title: "MEMBERSHIP",
      link: "/membership",
    },
    {
      title: "PRIVACY POLICY",
      link: "/privacy-policy",
    },
    {
      title: "TERMS OF USE",
      link: "/terms",
    }

    ],
  },
];
const contact = [
  { src: "/asessts/footer/contact (1).png", mode: "+91 1234567890" },
  { src: "/asessts/footer/contact (2).png", mode: "Loremipsum@gmail.com" },
  { src: "/asessts/footer/instagram.png", mode: "@nurse.shahina" },
  {
    src: "/asessts/footer/contact (3).png",
    mode: "905 Watters Creek Blvd Suite 141, Alllen , TX - 75013",
  },
];

const contactPage = [
  { icon: <BsTelephoneFill />, mode: "1234567890" },
  { icon: <HiMail />, mode: "Loremipsum@gmail.com" },
  {
    icon: <ImLocation />,
    mode: "905 Watters Creek Boulevard, 141, Allen, Texas, USA",
  },
];

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510271751!2d76.76357017426172!3d28.644287354223533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1694055009994!5m2!1sen!2sin";

const ADD_IMG =
  "https://s3-alpha-sig.figma.com/img/98dd/fc2d/f06d62c194cb4ca989bb188bb00bbbf3?Expires=1696809600&Signature=SSLCBfRU4BZnsWjXqd3JeCaiRXzCMOg43vaSoJJVh8vtFmbA1nOFKcVSExPIC6yxlc7vJXrv2tBlaH3ZsgJB2jAJyr7Z8btKEf7~EqjdbAnpPO1uZZH~8OvPuIJqk71nlkpheac3j~C~Rq5SZAl~TDsCDn6OQ3JL2qOrYXp57qPlJiew1l0styRya4aS5Cw1oWCUpuOHhUd2QIX5KTno3dt6QOQC9qqyQVLYYoPJ0-OeqvblKWXzjCH254egVYbVCwdXFJZqFkaUEyc1aW3tYLaAHO7kKzW2aZYa7jJTRVRg3kWjoRy5KF07psETLrYT-BHTLZmqYERFA2H3rQ~lWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const STAR =
  "https://s3-alpha-sig.figma.com/img/3d9f/2c83/3209c56b12a5ba8749966557500d749e?Expires=1696809600&Signature=i3PBjTAaovOfeFv-P6A1Rur0HJeIHqFhMBBPfXtFjzx9GqK~sIwGfNcOGNm-O66fAy4jXmowHSPAiA1OUbzRYFfEs-bi4nb-9VttijdHR3GffPViKZeHMu7r3fZzLgXKrmpeE5aekBCvWK1S4Apo31bJosh0cXg3VSnJnNTIcQU13cGqrtjm7eGhXFxjTk9Z9~qH7bBh0nhyC0ZQ-9sGzRSc~AjGmGLHsJ-htSX6mYAxKI97tLeb8mDAmzjzIbzzz-BXQEmnuP4dloBkpNIibu5E9neMXwyNyt~F6QSdctbCOdL5NG0Iemh9udQUCWtwidX59qI7OPN8gDl6jVmQzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const MAP_IMG =
  "https://s3-alpha-sig.figma.com/img/0ba3/f75a/79292454d79968ee69ee7568ab7bb909?Expires=1696809600&Signature=gcb8CJiUzF0mEEPdtwCQXcu7cF9RqavCmN3txzAmuo9tvxmpj04fBNmyJ2N6rUwQCCtSRj5yPRM0P8ZAMU-gmVNl~0hZHzST6l29xmY1OT2kUyouwfznbVTsbTKQLvNRKyiEyqdHmoSga~cbVS1B3m2kP8x~xf88IM2aJpYHM~~S44VMN7RSGD6yRdKfJ6lxXMjlZ9g49gwKgPi1-0bJIfCqcMC4fPklSWUfjz8a3c2Bz1u3iKhxzBqL0J5MsyyDY0CxEDbfWKbiRj1TcUfyGWsyEtAtQPUbdCbTrxhn-NvE0DieoEv3dhFjB5b7N9mXt74kzjkjXUuUG9hV1SY4pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const GOLD_MEDAL =
  "https://s3-alpha-sig.figma.com/img/16c1/2675/c0964da3294f9f7378d69e315d0872ba?Expires=1695600000&Signature=AuBQzDGx9hBr4FDeKAxZxvPCHHcA3TbB-nyEi0dIuRIqwIetHHkmSOQXuQfPbtU6a73Ono40QuZ60rtObZuBI-N6Z2FpMz7dHYFZFCvA-cYO6cMHXyIxoD2h3LcP5cNvAn5u9R4O~KdnkO-lySzIRXVtctV~~4eBjgfm6QgggBBjCjR8~~QqF5AQ50z5lptoNsLzDPrgsa-KFDG8Kljg2-G5Voqmn6Ow0dD4gR8N6iWHaY4F0vjNDdGKRWhZLkvQcwj0Th2I6rlbegPGKfeg4M4h6~E~ijB5qn86NGO9G0IyFLMZrOcvPmNZZqEqwfK6p-cWwt91nPqTx4gGIMGQUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const SILVER_MEDAL =
  "https://s3-alpha-sig.figma.com/img/f83f/8116/eb1f3be5d9fd8c225234dc22d43bc1aa?Expires=1695600000&Signature=eXtqPtXkkqC8CD8dJylp20IdvhyxslYEHhSz7p~HAieMcD5affm36H7aJ13JucuyYKJyTdarBMI2SlY3V7FHNV6as9W~OCj2qUKojvtVI-MOWD1NTdruQJJwHLVP0CLB5dMRffNERYjXM5sJ~7offUS5d7wvxapShlkL6Mgc0cgybOoE8AOik99PezhYmS7Pq9RS4oZvmPrSjv3pqdmNULNV67o1AOqbTs2fIKdHET1uBlSj2o3C-o31pC0KWsqO2nL2~pkF5LsI3hMWrjCrgSRo4vhDQOlQQgQCfdRtqiSr3WA3O6fg1W9dMmL-b2cJ4UiQV-K7AGCrbRf-hMr61Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const PLATINUM_MEDAL =
  "https://s3-alpha-sig.figma.com/img/d30a/0549/06b85b99ec2b0e06f10f91a2b73bedfb?Expires=1695600000&Signature=hT3zjiRGN93EtmL5THGK8IwZOBac~eqYfbUTaMeFIq0C2QdtDh~yoE4rJ8IBM4KMiBmNP1hNGFfk379iJivNAYppXIrXOpGsybJGp064Pvi-QYPDB7fkgZU2RW-q0W~2P6Fs8p5soUd6KonZM4a9-P~2XdmZW81aVA-lFkCaI4cguhQpd2ewMxKxi5oqpT9b2BPWpVJMVbY~5nglyC4yqvC2rxejVcK4xDDJzFWDVXTR3DStoAbnwix87wzZS1Gd7aJOqyq89BGO1taKFNbzMXYYMtzm9DexK8XTjkl0tmx1pE3UpZmL1Dmyi1DVs5YPPv4lT6bSpVZIzhmoj3cuww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const DIAMOND_MEDAL =
  "https://s3-alpha-sig.figma.com/img/5206/5754/1695581fd19adf8ecfe70a0b621592b8?Expires=1695600000&Signature=DmbUVREkIPpH5QqpOgSlcKB57uQ7RuL0iCXDTIV-e0nrDqpFZYfLV5Vtp98ywTA0IkYreB9jOSrl-ecoaCZzCLR5YvJePjYp5Q~c7NyxNGPU5JevWERyZ8t-v46mxycHRlgXNHn7cHyt4RCPMZG3Kp0bc9NYgPhnGQv~aehalm9PgS4no3NUD19mmq77E9XXBRe2nM9VH6GfqwrYPyWaImsGq-42ipsTmp5AG1nekdC9xN7eBD2y5L9~P7NniXqw49rhNxib-oCReF0d9OSOZjTWUNcXdY21fCVHFZuzPuG0sd1Rv2z6dYx9Ovfs4pSFplWLpLvhr-KgfIYEBRhGwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const galleryImages = [
  {
    service: "Microneedling",
    src: "https://s3-alpha-sig.figma.com/img/a25a/a5f5/22c3cf673bf2f6ff4126eb30c3240dda?Expires=1696809600&Signature=JeP2zUx2kgYpNxD~Z3mzBkaZ0uhxj0cAleXSYM9jTX7BJNN-dI4m3jjQyfiIhwklSrsfTBJPxwiZd7euLKExSCxENfOePstgRglFs4NRDX2b0irPFtxwzEFIyFYpoRPEFYiBcIhvOlJ11R28kpfy~k0B2uAxiByiwL88m4c3kCQjipwWVwCmcbk9bgKs7sDoYktUschbn9TURUgjcHDSv3nLzOeczUhN1kqlJvYYjmt1DY34TOFzrxYsSR8IM82WUo-ulwe~9Tv8SwVT819of9v2xN79rk-SpSZSK8a5o1zVGptZsP2gAoV~uOx02YF5OqtJ8zcaLkYUFxwNAKhvAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Jet Facial Treatment",
    src: "https://s3-alpha-sig.figma.com/img/7df6/8aca/cbcc438e39909a1787036442e14812b0?Expires=1696809600&Signature=d3i6pLiCZi3v4TjhRx4OB8C2G38kuWqL8o9AipyooRvvkPdHYbQUnE5HmiIk~DgJx40jYirT8bQAgc7h~V6MdPggB7IiyXacFLGFBYfGuaItD6IstRGflmh3jZglgQjO9vsi2i4byp4NJ7iL4vHppU5fdEKGvnbJ0VM00YY-RpeDpA9uinc68dgrTzQg1iRrXyKcD0gG85lCuyUJNncP1~1gXQBGZWSiH8Dx7j2ZeatQKFkLBXY2cXOKAYa0axsEna5Xvb9PLPYGBEgYOaIWaKVNDcg0oVj4rcVIW0zbS6SzNUzfKkzj5y-pyANqYZPB4V-YwQ7XOXu2sZVNwzOQag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Cosmelan Treatment",
    src: "https://s3-alpha-sig.figma.com/img/1e97/8e3b/4c32148303fff071df351690236b69c2?Expires=1696809600&Signature=gcdCm3OPRD~1QCBzmCXfhgraLHh~0qEyx3X9ToLVZc-4jNsaQtqRkAohnHKwFpVS-1l1SJg8Zq6l4FcRb-deUjzBIUKzfH7akPN25QhcHdFpOqVNb0pLxcCUrT8zrE-bqyBQT8IY4i1waWDuc8UJ2ZXKACPasod~ks3tXinaToApiObtPFxxwyPxHHbgjAgXvsvSzHYUdnXkVQLQcwS6HwjJ6evrsNlh0EvVRDjXPJVmhsYbpFRkdqjUWxMIqpvIxOIqWCeIfaLU6xIzWR97z~YZBm-~81Z9LT7EasUnkoy13RxFOtwD2xUkh3OGZTF6D-jiANyqIw4jADO4uG2JHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Microneedling",
    src: "https://s3-alpha-sig.figma.com/img/66f8/4d14/301f45c11f07a57c02c725eeb70f0707?Expires=1696809600&Signature=ksywFpvEA~R7Em7lgOxrcQcSwyqcMYrrQVjijhbGPPzJ9VfcF3BrVlqzrxI81YFARl5sk2ZRSaLhyrN5zfn1DezSX188Q3N4MihELyictWAXcCWK3dF9YYYEHw8XHU1kB7OXFdDbtSNS0SKKGmXlMpX3ms3oA~XacoZWIl7hENrT1puEtXRzp8IQ4ckm9Tcv~NFcsu62aZzyKkzgBAfk2Hw3zog1MSiZ11cU3AnHh68lSbFqzhksJootvCWibJdXPLwZnx4S9x-5tOzVfx5w7jv1lteP9NF3IZir~92~SoaJsevtfJh8Lb7YrONbq-1HV8BzeJVCgB~pI~jOeANpRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Microneedling",
    src: "https://s3-alpha-sig.figma.com/img/cac8/d71c/fe25002a9ed8cc49825e8ee289350281?Expires=1696809600&Signature=GqAY0Qq2UDH5ajuZacndK8Gl0-FT0V8R2nJILw8oNZXTxt7WlPnaUXZHaeLvjbfvBE~A6CtjvOF64dSkAzA8jg1-YW2Ml7hEjpDaEwNGjeA5MHrL4eLmzs7-6OfGSWl8sbf1uXThRE7QuYHn6ez4XGb20VerhovniytMtV9UEgEd5DkSbqRcQRctAm6FsRgpQGpcsM1654L9P5xcVeb9oSdpWvbXdEtadqHKGGV317Q3lDlKzvYIoY-RF8LmBWXMGyRKkBqTg-sNpbTTu~7056HkS5NMFUmNpiIElhLwJF7lR8f3GgQ9vk3BZ-VARcFQGlMyR36PJNzxfylB6G0Qzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Cosmelan Treatment",
    src: "https://s3-alpha-sig.figma.com/img/8622/5b26/1ebcc6a3d73293132764cd2bdbada56c?Expires=1696809600&Signature=YMcD~6RaBuAFwhKvHQ9q7Xo98G7tWYLn3SLnHA9oZ851WJRE0zCojfAjvyH2AZo1NCj0I7zQBso0cZB8Ao6yhjjveIBUWXhN-FDPINtBI8IcIMCHxBHJCph2V0PFsBU-ipEiRtMCzXlH7p1Yu7HKbRxJB6a~3JXnoIa921hXSoGwpdtOE4wBGTTUsiFgzUe3n1~Yh6g3wtxCYi213YQHgVAdxxs6-XHXcXN2qz9Q8cGqDVKv-enneiq7AcsS6ybwxitaot1wSfqQjINQ96h63dxYhnZzOuF2bF3X12rHuHM7RzMahVXul~ce1wx2r-8WU-5M~BWxoKfbGMn4tIwwkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Microneedling",
    src: "https://s3-alpha-sig.figma.com/img/a25a/a5f5/22c3cf673bf2f6ff4126eb30c3240dda?Expires=1696809600&Signature=JeP2zUx2kgYpNxD~Z3mzBkaZ0uhxj0cAleXSYM9jTX7BJNN-dI4m3jjQyfiIhwklSrsfTBJPxwiZd7euLKExSCxENfOePstgRglFs4NRDX2b0irPFtxwzEFIyFYpoRPEFYiBcIhvOlJ11R28kpfy~k0B2uAxiByiwL88m4c3kCQjipwWVwCmcbk9bgKs7sDoYktUschbn9TURUgjcHDSv3nLzOeczUhN1kqlJvYYjmt1DY34TOFzrxYsSR8IM82WUo-ulwe~9Tv8SwVT819of9v2xN79rk-SpSZSK8a5o1zVGptZsP2gAoV~uOx02YF5OqtJ8zcaLkYUFxwNAKhvAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Jet Facial Treatment",
    src: "https://s3-alpha-sig.figma.com/img/7df6/8aca/cbcc438e39909a1787036442e14812b0?Expires=1696809600&Signature=d3i6pLiCZi3v4TjhRx4OB8C2G38kuWqL8o9AipyooRvvkPdHYbQUnE5HmiIk~DgJx40jYirT8bQAgc7h~V6MdPggB7IiyXacFLGFBYfGuaItD6IstRGflmh3jZglgQjO9vsi2i4byp4NJ7iL4vHppU5fdEKGvnbJ0VM00YY-RpeDpA9uinc68dgrTzQg1iRrXyKcD0gG85lCuyUJNncP1~1gXQBGZWSiH8Dx7j2ZeatQKFkLBXY2cXOKAYa0axsEna5Xvb9PLPYGBEgYOaIWaKVNDcg0oVj4rcVIW0zbS6SzNUzfKkzj5y-pyANqYZPB4V-YwQ7XOXu2sZVNwzOQag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    service: "Cosmelan Treatment",
    src: "https://s3-alpha-sig.figma.com/img/1e97/8e3b/4c32148303fff071df351690236b69c2?Expires=1696809600&Signature=gcdCm3OPRD~1QCBzmCXfhgraLHh~0qEyx3X9ToLVZc-4jNsaQtqRkAohnHKwFpVS-1l1SJg8Zq6l4FcRb-deUjzBIUKzfH7akPN25QhcHdFpOqVNb0pLxcCUrT8zrE-bqyBQT8IY4i1waWDuc8UJ2ZXKACPasod~ks3tXinaToApiObtPFxxwyPxHHbgjAgXvsvSzHYUdnXkVQLQcwS6HwjJ6evrsNlh0EvVRDjXPJVmhsYbpFRkdqjUWxMIqpvIxOIqWCeIfaLU6xIzWR97z~YZBm-~81Z9LT7EasUnkoy13RxFOtwD2xUkh3OGZTF6D-jiANyqIw4jADO4uG2JHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const PAYMENT_TYpes = [
  {
    type: "Quick Applications",
    src: "https://s3-alpha-sig.figma.com/img/5a65/12f2/28ccef67e2fb8ee5d9c5a6164c8af649?Expires=1696809600&Signature=GjNzbHgfuhLbKA9xKlwBe2fuWMdrDrEUiWxa6GxjdONdFUGNPlXFq9EOlWFUXOXtOUfT3r2PcOEa-DAOpL0mR48tf14GOdA9iwk0pRjR6AVMtx601VxfkJ3CmwHx2SDF4EzMnLVxhjtJSweHO0X3lNIVYGHBMT9RfFMOIvls59NP320Fmi2pz~uOUEJ8-i3ZNwjHICzU33uOfutKBbtQVqFc3OewJczIkcOQdbDF9X2Ci7Mo6LN6KhdKEArwz6xRpW8ercmjx~raZAASSSbOyFeCUp8H4xGiMFUopWHHJ0-T8OXWwtHPjYIpQ3FlzSF4MmzqPUh~ubkukeko3XHglQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    type: "Flexible Payment Options",
    src: "https://s3-alpha-sig.figma.com/img/67d6/e884/c551c1d32d16263b24e2b2efea2a2003?Expires=1696809600&Signature=LiAzXhVd5furwDtw0SVVsiNdmQzZIhugWJQItGiXsRKwfx3zVgfZ2RKDPJEiwVDezyxX0VP9XRTwjdZoePYDUvXJ0Dr11ShSf29WAUKvvZJGq9hKasdWoJ~pfifvtBksmqZqXrv9t6ZFR0lAmolQ4wnbho9-fJVJ2oRviv1PeYF~7YYRFubUSXlkc7IZ7svN44p4y-D3AN8BwNwlNTcqOXSt2QxzKXDYN-TCZJG7HCzuaK0OeHkH4RNYaM-yh9vlTmy7w~9v45pL-fU2kEe5Bl-pqMVXLZrqMI4k76sEmaXFjRuOH~TVZS372LSPIKf5WrqkQErT1vPW11D-xva8qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    type: "No Hard Credit Check",
    src: "https://s3-alpha-sig.figma.com/img/2481/41b0/351fe0efc07da455ad7e11e2e1386290?Expires=1696809600&Signature=ACDcdLkSBXYquwxXiwGXDWpaIsDQWe8XOEymP-BvmSBh28Sn8HQg~ytfeqkuoQGTI1XuVd7-WNuTsgPMPWfaE6u4PLB9ETRtjH6Nf8DBnTSomt6Pkno31vCUj-NkbnSqZieu0pLyI3Mbh1WiN-Y5lnjdA18oolEuf-EvobuGQNudoOmxbQdy6sFHi~96n1zq9-BqnoN5FKQODR7zZNP-~44Tfe0Av~apaQfHSehieaRpif7kAlWVcPtczYJhIY-3mfUJajoTtyVqhHao~C2CuBRCqBmIBY-uJ8E5jHozHoxK91FZM-braW6WLg1dIKyEswdgBbbecza-oBekDCh-ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    type: "High Approval Rate",
    src: "https://s3-alpha-sig.figma.com/img/7cdf/39dd/36226ae6544374ca0dd67eab301482c9?Expires=1696809600&Signature=omnrgtbMYZes6vz8T1a04L93iOABwqSOTkKQZJUO-6EuOwQmEoeY1Ii8PCSGvIVEXgrEsrHp9DBYB4UhuLCUGvbgKuHv5V-bqavNjob9103QoS-H-5osxR26wIJw5JgF3cK4F0ckCbexR6rfwudBwJFYLx4nAS5uC4X7nlSf6V-rFQLy0TrZuNQCFFD4S2MYZdSMZiWIGyyu~MirdnGCQTBObnDeFCDD8vMo-V3HcYr7hY2e7Mn2fTQNr8mP-oOsrEDrYLpkZgIG8~tnoGmXNoCHoGKZ43KuQ0KaYiostQT9mTk0zfA-a-XD2fFbQ0TSQoJpKnSLqzK3NHBe3MEotg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

const financialSituation = [
  { icon: <TiTick />, value: "OKAY" },
  {
    icon: <BiSolidLike />,
    value: "GOOD",
  },
  { icon: <PiStarFill />, value: "GREAT" },
];

const testimonials = [
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
  {
    title: "Claire M.",
    desc: "I’m a teenager who developed stretch marks through puberty. I really hated the way it looked. The stretch marks appeared on my thighs, knees, and buttocks area. I went to see Shahina for a consultation and she recommended micro needling treatment. I completed 3 sessions. I am very pleased with the results. Shahina was very professional and kind. I would definitely recommend her to anyone who has any skin issues. Thank you so much Shahina!",
  },
];

const SERVICE_HEAD_IMAGE =
  "https://s3-alpha-sig.figma.com/img/efd9/806b/22695128354bc21a01db7664dde7431c?Expires=1696809600&Signature=Zs9BmIdnbGHZLQC~ei5PzTAZVP462Ae37N-xNrqJrJngOl3HkedUkDBDzdKPQ9QF5ahMkMDlo0sP69J0v3prd4MhJSp6xPwMhIQpfTwP7uXp99URRoVtiXU-eOgznL8WMuJogq~Hzy7Qyvc1BTl7nZRQI5Gc-Io0QZSetgZMeyJ0q2MK-xv-AF1HFbqUq42uZj3biKCP02vqIzbta9aXuTeU3RkdhVUEkowc0o8DodII3rK2jqo1YwDr~BNGJr4Zs-55Kvhw~Z5gBZIJQOmyabbeC0TKNnMsXjypITOzYvK0z6u6L7DoesDIwtcxPYhx0GIbjiYrf5ZlhsFN7AHz2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const SHOP_HEAD_IMAGE =
  "https://s3-alpha-sig.figma.com/img/268d/24ba/bb48b7bd0d95329554b1742720841d8d?Expires=1696204800&Signature=nat7T8YaCWMkpumh8Qgf6-fDIQEz3f7RttC9cira-fzvYTzelhoFfK5YDiyMnGg-ncpd0cbKgFyRTrdivHcYIaKJfJsHfBiqX~MfSf5JDJnVFyLTdVeOMwKwZSbe1WoxL8HyteWmQDiXgbZfqewZwy5NWMir2hxMV9OkLQh4EbkoTt102nNA93ShDS5KeUfJbC1f8yc0Bl10y76hMrML51SyT-xIQlytCPd8czbiiDJg9I6lHgmeQdSVcJYbPDLbRFT5QvtfE9p3TWzWMRoBNTmJC0z~u4dNNXt391N5xaaTW-4Autu8euTLco8~T15uxJfBMWY96KdQPoQDUmZREg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
export {
  SERVICE_HEAD_IMAGE,
  SHOP_HEAD_IMAGE,
  pictures,
  ServiceCardImages,
  OFFER_IMG,
  partners,
  paymentCards,
  OUR_PRODUCT,
  WHO_WE_ARE,
  latestNews,
  footerLinks,
  contact,
  contactPage,
  MAP_URL,
  ADD_IMG,
  STAR,
  MAP_IMG,
  GOLD_MEDAL,
  SILVER_MEDAL,
  PLATINUM_MEDAL,
  DIAMOND_MEDAL,
  galleryImages,
  PAYMENT_TYpes,
  financialSituation,
  testimonials,
};
