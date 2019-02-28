

class Videos {
    listVideos(res) {
        let dummyVids = [
            {
                title: "Video 1",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
                location: "https://s3-us-west-2.amazonaws.com/columbia-pacific/front-page.mp4",
                thumbnail: "https://dummyimage.com/640x4:3/f0f"   
            },
            {
                title: "Video 2",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
                location: "https://s3-us-west-2.amazonaws.com/columbia-pacific/front-page.mp4",
                thumbnail: "https://dummyimage.com/640x4:3/ff0"      
            },
            {
                title: "Video 3",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
                location: "https://s3-us-west-2.amazonaws.com/columbia-pacific/front-page.mp4",
                thumbnail: "https://dummyimage.com/640x4:3/00f"    
            },
            {
                title: "Video 4",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
                location: "https://s3-us-west-2.amazonaws.com/columbia-pacific/front-page.mp4",
                thumbnail: "https://dummyimage.com/640x4:3/f00"      
            },
            {
                title: "Video 5",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
                location: "https://s3-us-west-2.amazonaws.com/columbia-pacific/front-page.mp4",
                thumbnail: "https://dummyimage.com/640x4:3/0ff"      
            },
        ];

        res.send(dummyVids);
    }
}

module.exports = new Videos();