export class ProductService{

    static products = [

        {
            id: "AA001",
            name: "Paris LX W",
            imgUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZYfWMaA6s_q00ja8Rbpdt4R5NkpB9Q-MQg&s",
            
            price : 58965,
            qty : 2
          },
          {
            id: "AA002",
            name: "Singapore LX WC",
            imgUrl:
              "https://zerolifestyle.co/cdn/shop/files/Royale_Gold_0000_c9e7e71d-89d2-4c63-8c85-a52ccea1f59d.webp?v=1725970482&width=3088",
              price : 865823,
              qty : 7
          },
          {
            id: "AA003",
            name: "Malaysia CHG EC",
            imgUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4585uzRMekfqywoc-TY80jywBIJhA2JUvA&s",
            price : 2323,
            qty : 2
          },
          {
            id: "AA004",
            name: "Pakistan LS SDT",
            imgUrl:
              "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/ForcePro_Cam002V1.png?v=1744195923",
              price : 236583,
              qty : 5
          }
    ];

    static getAllProducts(){
        return this.products;
    }
}