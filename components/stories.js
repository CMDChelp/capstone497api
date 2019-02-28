class Stories {
    listStories(res) {
        let dummyStories = [
            {
                title: "Story 1",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
            },
            {
                title: "Story 2",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
            },
            {
                title: "Story 3",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
            },
            {
                title: "Story 4",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",    
            },
            {
                title: "Story 5",
                description: "Lorem ipsum dolor amet occupy messenger bag asymmetrical, keytar snackwave humblebrag air plant subway tile af forage poke sriracha normcore. Wayfarers gentrify hashtag, single-origin coffee salvia poutine iceland health goth. Succulents intelligentsia salvia keffiyeh, next level subway tile slow-carb drinking vinegar gastropub green juice. Leggings retro artisan raw denim",
            },
        ];

        res.send(dummyStories);
    }
}

module.exports = new Stories();