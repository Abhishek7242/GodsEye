let bName = document.getElementById('bName');
let aName = document.getElementById('aName');
let search = document.getElementById('search');
let input = document.getElementById('input');
let image = document.getElementById('image');
let notFound = document.getElementById('notFound');
bName.innerText = bName.innerText.toUpperCase();

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red}, ${green}, ${blue})`;
}

// Clear existing content
let newContent = '';
for (let char of bName.innerText) {
    newContent += `<span style="color: ${generateRandomColor()}">${char}</span>`;
}

bName.innerHTML = newContent;




let fakePromise = (url,name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (name == 'Shivanshi Verma') {
              notFound.innerText='Match Found'
              notFound.style.background='green'
          }
            image.src = url
            aName.innerText=name
                resolve() 
        },300)
    })
}

async function rainbow(){
    await fakePromise('https://i.pinimg.com/originals/36/c2/f5/36c2f5ae18fe93aa9a878e84bd7d67a8.jpg','Alexandra Daddario')
    await fakePromise('https://no1wiki.com/wp-content/uploads/2020/12/Violet-Rain-photo-682x1024.jpg','Violet Rain')
    // await fakePromise()
    await fakePromise('https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202301/screenshot_109.png?VersionId=N_sK7cWa7zvt5mr6Wu.qBohs59J2_xR','Shraddha Kapoor')
    await fakePromise('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaOd2oAK7_m0lxUr2A1jfuhLLBwmT88R0YXZ7u1SWntrPCeZ65f4Gz6AELKaeadDJjlHV141V9LTNIJSrpAoo8_xzX5jfZoz3fE4o5Ignwd235cQU7x3sCEo64POJI5OJQ5jgjVbD43PLLyZpU-T6_hHirTzBKhSSfdYVZ3OWkPrgE1nakttnKa9MbIQ/s826/emily+willis+red.png','Emily Wills')
    await fakePromise('https://i.pinimg.com/736x/fc/80/98/fc80981e36a147e53bacfeed1a64f1ec.jpg','Kiara Advani')
    await fakePromise('https://images.news18.com/ibnlive/uploads/2021/03/1615091703_53082639_314919832712330_7070368263179757941_n.jpg?impolicy=website&width=0&height=0','Disha Patani')
    await fakePromise('https://horrornews.net/wp-content/uploads/2018/12/Gal-Gadot-hottest-sexiest-photos-horrornews.net-2.jpg','Gal Gadot')
    await fakePromise('https://vistapointe.net/images/karen-gillan-1.jpg','Karen Gillan')
    await fakePromise('https://i.pinimg.com/1200x/de/68/27/de6827485d7ee9a5a823be78601c3641.jpg','Katy Perry')
    await fakePromise('https://i.pinimg.com/1200x/7a/8e/d8/7a8ed81e2a0fac83290a7678ae40bfd9.jpg','Alia Bhatt')
    await fakePromise('https://i.pinimg.com/1200x/ba/8e/84/ba8e84c9dfede87510a30990d0515af8.jpg','Deepika Padukone')
    await fakePromise('https://i.pinimg.com/474x/38/a3/8d/38a38de64b0bc6b46ea6acd8a57a7ee3--emma-watson.jpg','Emma Watson')
    await fakePromise('https://i.pinimg.com/736x/00/bb/a0/00bba0fc756027d071c800dc3ded11a7.jpg','Sonakshi Sinha')
    await fakePromise('https://www.kollywoodzone.com/boxoffice/wp-content/uploads/2021/02/Gorgeous-Actress-Kriti-Sanon-Photos-02.jpg','Kriti Sanon')
    await fakePromise('https://i.pinimg.com/736x/ca/c2/79/cac27962fdf1d1075e746f42941a1d1b.jpg','Rakul Preet Singh')
    await fakePromise('https://i.pinimg.com/736x/62/32/e5/6232e5ce2dbe317b7e8856ed2b2c7736.jpg','Ananya Pandey')
    await fakePromise('https://i.pinimg.com/736x/af/9b/38/af9b38c80c071c4b30e8627d9cf249f0.jpg','Tamannaah Bhatia')
    await fakePromise('https://i.pinimg.com/1200x/39/4f/a4/394fa4eb1452976c8a619bb8e5019c7b.jpg','Yami Gautam')
    await fakePromise('https://www.fropky.com/xlmpdt/Rahul/2013/sep/15/Katrina/Katrina-Kaif-FHM-Magazine-Stills.jpg','Katrina Kaif')
    await fakePromise('https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/scarlett-johansson-looks-hell-hot-in-this-picture-201704-1509352958.jpg','Scarlett Johnson')
    await fakePromise('https://www.maxim.com/wp-content/uploads/2021/05/elizabeth-olsen-scarlet-witch.jpg','Elizabeth Olsen')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2020/11/natalie-portman-854x1024.jpg','Natalie Portman')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2020/11/jennifer-lawrence-768x786.jpg','Jennifer Lawrence')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2020/11/Megan-Fox-768x900.jpg','Megan Fox')
    await fakePromise('https://images2.imgbox.com/30/c3/T07s1O1s_o.jpg','Brie Larson')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/01/zendaya.jpg',' Zendaya')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/02/hailee-steinfeld-768x804.jpg',' Hailee Steinfeld')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/02/emmy-rossum-768x768.jpg','Emmy Rossum')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/02/elisha-cuthbert-768x746.jpg','Elisha Cuthbert')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/02/ellen-page-768x768.jpg','Ellen Page')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Jaimie-Alexander-768x781.jpg','Jaimie Alexander')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/03/jordana-brewster.jpg','Jordana Brewster')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/03/dakota-johnson-768x850.jpg',' Dakota Johnson')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/03/selena-gomez-768x797.jpg','Selena Gomez')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/03/michelle-rodriguez-768x827.jpg','Michelle Rodriguez')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/03/victoria-justice-768x815.jpg','Victoria Justice')
    await fakePromise('https://www.mrdustbin.com/en/wp-content/uploads/2021/03/saoirse-ronan-768x841.jpg',' Saoirse Ronan')
    await fakePromise('WhatsApp Image 2023-08-25 at 17.44.27.jpg','Shivanshi Verma')
    // await fakePromise()
    
}
setTimeout(() => {
    
    rainbow()
},20000)
// pro('blue')
//     .then(data => {
//         pro('red')

//  })
//     .then(data => {
    //         pro('purple')
    

//  })


