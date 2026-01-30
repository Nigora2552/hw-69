export  interface IMovie {
     show: {
         name: string;
         id: string;
         summary: string;
         image: {
             medium:string
         }
     }
}

export  interface IFilmMutation {
    title: string;
}
