// const slides = [
//     {
//         image: 'img/01.jpg',
//         title: 'Svezia',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     },
//     {
//         image: 'img/02.jpg',
//         title: 'Svizzera',
//         text: 'Lorem ipsum.',
//     },
//     {
//         image: 'img/03.jpg',
//         title: 'Gran Bretagna',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//         image: 'img/04.jpg',
//         title: 'Germania',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
//     },
//     {
//         image: 'img/05.jpg',
//         title: 'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
//     }
// ];

// console.log(slides);

const app = new Vue (
    {
        el: '#app',

        data:{

            clickedThumb: 0,
            currentSlide: 0,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
        },

        methods:{

            nextSlide: function(){

                this.currentSlide++

                if (this.currentSlide === this.slides.length) {
                    this.currentSlide = 0;
                }

            },

            prevSlide: function(){

                this.currentSlide--

                if (this.currentSlide === -1) {
                    this.currentSlide = this.slides.length -1;
                    
                }

            },

            thumbChooseSlide: function(){
                this.currentSlide.
                console.log('cliccato')
            }
    
        },

        created(){
           setInterval (this.nextSlide, 3000)
        }
    }      

)


// 1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

//
