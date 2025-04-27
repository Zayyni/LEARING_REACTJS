export class TourService{

    static tours = [
        {
            sno: "AA001",
            name: "Paris",
            imgUrl:
              "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/de/b0/c7.jpg",
          },
          {
            sno: "AA002",
            name: "Singapore",
            imgUrl:
              "https://media.dpauls.com/drive-server/images/packages/singapore/singapore%20city/merlion-night-view-singapore.jpg",
          },
          {
            sno: "AA003",
            name: "Malaysia",
            imgUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeMQNTdw-WffIlZNy8L3am3KTRt_RWY8sdQ&s",
          },
          {
            sno: "AA004",
            name: "Pakistan",
            imgUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_tXrSjh50HwY2AEfu3q_5oXuNvGjOzGHRQ&s",
          }
    ];

    static getAllTours(){
         return this.tours;
    }
}