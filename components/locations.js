const cdn = "https://cchm-historic-routes.s3-us-west-2.amazonaws.com";

const backgroundImages = "/images/sites/";

function getVideo(name) {
	return `${cdn}/splash/splash-${name}-small.mp4`;
}

function getAudioImage(name) {
	return `${cdn}/audio/images/${name}.jpg`;
}

function getAudioLocation(name) {
	return `${cdn}/audio/${name}.mp3`;
}

const heritageImages = [
	cdn + "/images/heritage/cchm00247.jpg",
	cdn + "/images/heritage/cchm00782.jpg",
	cdn + "/images/heritage/cchm00784.jpg",
	cdn + "/images/heritage/cchm00785.jpg",
	cdn + "/images/heritage/cchm02445.jpg",
	cdn + "/images/heritage/cchm03750.jpg",
	cdn + "/images/heritage/cchm08915.jpg",
	cdn + "/images/heritage/cmos00315.jpg"
];

const estherImages = [
	cdn + "/images/esther/historic/1.jpg",
	cdn + "/images/esther/historic/2.jpg",
	cdn + "/images/esther/historic/3.jpg",
	cdn + "/images/esther/historic/4.jpg",
	cdn + "/images/esther/historic/5.jpg",
	cdn + "/images/esther/historic/6.jpg",
	cdn + "/images/esther/historic/7.jpg",
	cdn + "/images/esther/park/1.jpg",
	cdn + "/images/esther/park/2.jpg",
	cdn + "/images/esther/park/3.jpg",
	cdn + "/images/esther/park/4.jpg",
	cdn + "/images/esther/park/5.jpg",
	cdn + "/images/esther/farmers/1.jpg",
	cdn + "/images/esther/farmers/2.jpg",
	cdn + "/images/esther/farmers/3.jpg",
	cdn + "/images/esther/farmers/4.jpg",
	cdn + "/images/esther/farmers/5.jpg",
	cdn + "/images/esther/brewfest/1.jpg",
	cdn + "/images/esther/brewfest/2.jpg",
	cdn + "/images/esther/brewfest/3.jpg",
	cdn + "/images/esther/brewfest/4.jpg",
	cdn + "/images/esther/brewfest/5.jpg",
	cdn + "/images/esther/brewfest/6.jpg",
	cdn + "/images/esther/brewfest/7.jpg",
	cdn + "/images/esther/brewfest/8.jpg",
	cdn + "/images/esther/brewfest/9.jpg",
	cdn + "/images/esther/brewfest/10.jpg",
	cdn + "/images/esther/brewfest/11.jpg",
	cdn + "/images/esther/brewfest/12.jpg",
	cdn + "/images/esther/brewfest/13.jpg",
	cdn + "/images/esther/brewfest/14.jpg",
	cdn + "/images/esther/brewfest/15.jpg",
	cdn + "/images/esther/peace/1.jpg",
	cdn + "/images/esther/peace/2.jpg",
	cdn + "/images/esther/peace/3.jpg",
	cdn + "/images/esther/peace/4.jpg",
	cdn + "/images/esther/peace/5.jpg",
	cdn + "/images/esther/peace/6.jpg",
	cdn + "/images/esther/peace/7.jpg",
	cdn + "/images/esther/peace/8.jpg",
	cdn + "/images/esther/peace/9.jpg",
	cdn + "/images/esther/peace/10.jpg",
	cdn + "/images/esther/peace/11.jpg",
	cdn + "/images/esther/peace/12.jpg",
	cdn + "/images/esther/peace/13.jpg"
];

function getHeader(name) {
	return `${cdn}${backgroundImages}headers/${name}.png`;
}

const locations = [
	{
		name: "arts",
		niceName: "Arts Building",
		lat: 45.629828,
		lng: -122.671834,
		descriptions: [
			["Architect", "Day Hilborn"],
			["Style", "Beaux-Arts"],
			["Prominent People", "Day Hilborn"]
		],
		longDescription: `
The Arts Building, designed by Day Walter Hilborn, represents one of the earliest and largest works of one of Clark County’s most significant architects. 

It is noted by State Architectural Historian Michael Houser that “No single person in the history of southwest Washington has had a greater impact on the…built environment than architect Day Hilborn.”

He designed this structure in the Beaux Arts style of the training he received from Washington State University. 

However, over his celebrated career, Hilborn moved from this initial style to follow the changing national trends in architecture, venturing from this to Art Deco and eventually embracing the Modern style of architecture, which came to prominence in the mid-20th Century. 

His work includes the Clark County Courthouse, Columbian building, and Kiggins Theatre. 

Hilborn has left a revered legacy. Houser indicates that “His projects span a 40-year period and define many of the cultural institutions of the City of Vancouver.” To live, work, or worship in a Hilborn building is a point of pride for many in Clark County and beyond.`,
		year: "1928",
		content: [{ type: "audio", thumbnail: getAudioImage('arts'), location: getAudioLocation('arts') }],
		backgroundImage: `${cdn}${backgroundImages}arts.png`,
		headerImage: getHeader('arts'),
		splashVideo: getVideo('arts')
	},

	{
		name: "cchm",
		niceName: "Clark County Historical Museum",
		lat: 45.633121,
		lng: -122.671269,
		descriptions: [
			["Architect", "Dennis Nichols and William Kaufman"],
			["Style", "Beaux-Arts"],
			[
				"Prominent People",
				"Andrew Carnegie, Eva Santee. Lowell M Hidden, Edgar Swan"
			]
		],
		longDescription: `
Education plays a vital role in our lives and, for over a century, Vancouver residents have come to this place to learn. Today, it is the home of the Clark County Historical Museum, but it started its life as the Vancouver Public Library, which opened on New Year’s Eve 1909. The celebration of this new institution of learning was a community effort. Vancouver attorney Edgar Swan applied to a program implemented and funded by industrialist Andrew Carnegie. As a result, $10,000 was granted for the construction of this building. 

It was during this process that a site for the library was identified. Lowell M. Hidden, a local brick manufacturer, donated the land for the building. He did this with the condition that there must always be a library in the building. If there is ever not a library, the land ownership reverts back to the Hidden family. Today, the Clark County Historical Museum continues to operate a research library to honor this agreement.

The broader community also rallied to raise necessary funds for the new library. Roughly $1,232 was raised to buy books, and the Vancouver City Council approved $1,500 to cover the cost of operations.

Over the decades, the library continued to grow and add more resources for the community. The greatest growth came under the leadership of librarian Eva Santee. She was a driving force behind the creation of the Fort Vancouver Regional Library District, which operates numerous libraries in Southwest Washington. The library district quickly outgrew the building and a new library was planned and opened in 1963.

On May 24, 1964, the Clark County Historical Museum was opened in this building. Visitors explored a recreated general store and doctor’s office and viewed local history through modern displays and dioramas.

In the subsequent years, the museum’s exhibits and collection expanded to include objects from the Spokane, Portland, and Seattle Railways Museum and the Grant House Folk Art Center collection.

The museum continues to be operated by the Clark County Historical Society and maintains a collection of artifacts from prehistoric times through the present, as well as a research library.
		`,
		year: "1909",
		content: [{ type: "audio", linkToAr: true, thumbnail: getAudioImage('cchm'), location: getAudioLocation('cchm') }],
		backgroundImage: `${cdn}${backgroundImages}cchm.png`,
		headerImage: getHeader('cchm'),
		splashVideo: getVideo('cchm')
	},
	{
		name: "elks",
		niceName: "Elks Building",
		lat: 45.628606,
		lng: -122.671964,
		descriptions: [
			["Architect", "Robert F. Tegan"],
			["Style", "Mission Revival and Medieval Italian"],
			["Prominent People", "Ira Cresap"]
		],
		longDescription: `
In 1902, the Vancouver Elks Lodge was established and members of this community joined in the national work of the Benevolent and Protective Order of the Elks (BPOE). The BPOEs started shortly after the Civil War with the goal of promoting and practicing the four cardinal virtues of Charity, Justice, Brotherly Love, and Fidelity. In doing this, they were participants in a larger national movement and growth of fraternal organizations after the war. Their purpose was to band together for mutual benefit through collective use of their various economic and social resources. Many could accomplish what one could not do alone.

This is clear in the growth of the Vancouver Lodge. Just a few years after the Lodge’s establishment, its ranks and organizational strength grew, and in 1911, members were able to construct this impressive building. Designed by Robert F. Tegan, the building reflected mission revival and medieval Italian influences in its structure, featuring ornate brickwork, iron balconies, and tall arched windows on its upper floors. This building was officially dedicated on May 31, 1911. Reportedly, scores of Elks from 23 different states made the journey to Vancouver for the ceremony. The Columbian printed that day’s edition of the newspaper in purple ink, denoting the royal purple the Elks use on badges and robes. 

The Elks Club was home to many distinguished and charitable members of the community. Some of their charitable and community efforts included Christmas baskets for underprivileged families, community fundraisers, annual dances, and family picnics. During World War I, they held a fundraiser for the Vancouver Chapter of the American Red Cross. The Vancouver Elks were incredibly active in early 20th-Century Vancouver.

Though no longer in this building, the Vancouver Elks 823 continue to perform charitable work in Vancouver. Their current activities include raising funds for the Washington Elks Therapy Program for Children, the donation of 225 food boxes yearly for families, and over $10,000 in support for over 500 Clark County veterans, still holding true to the four tenets of the national organization founded in the wake of the Civil War. `,
		year: "1911",
		content: [{ 
			type: "audio", 
			linkToVideo: true, 
			thumbnail: getAudioImage('elks'), 
			location: getAudioLocation('elks') 
		}, { 
			type: "video", 
			title: "Saved by the Pin", 
			thumbnail: cdn + "/videos/elks-thumbnail.jpg", 
			location: cdn + "/videos/elks-video.mp4" 
		}, {
			type: "video", 
			title: "Elks Animation", 
			thumbnail: cdn + "/videos/elks2-thumbnail.jpg", 
			location: cdn + "/videos/elks2-video.mp4" 
		}],
		backgroundImage: `${cdn}${backgroundImages}elks.png`,
		headerImage: getHeader('elks'),
		splashVideo: getVideo('elks')
	},
	{
		name: "esther",
		niceName: "Esther Short Park",
		lat: 45.626475,
		lng: -122.674986,
		descriptions: [
			[
				"Prominent People",
				"Esther and Amos Short, Royce Pollard, George Propstra"
			]
		],
		longDescription: `
In the winter of 1845, Amos and Esther Short arrived in the area that would become the City of Vancouver. The Shorts hoped to plant their family on this disputed land and vied for ownership with other interested parties. These circumstances were not unique to this land. During this period, the West acted as a stage for economic, military, and political disputes. In short, their story is a prime example of how the West we know today was created. The Shorts initially laid claim to land already spoken for. Henry Williamson, who had emigrated from Indiana, preempted a claim to the same slice of earth that the Hudson’s Bay Company had designs on. In the end, Williamson’s aspirations to find fortune in California lost him his stake in the land. At the same time, the Shorts jumped Williamson’s claim and rooted themselves on the land. This led to several disputes with the Hudson’s Bay Company. In one case, Dr. David Gardner and a Hawaiian worker from Fort Vancouver came to remove the Shorts. Both were shot and killed by Amos Short. As a result, he was charged with murder, but eventually was acquitted of the charges. 

Not long after, the United States gained authority over the land and established Clark County, Oregon Territory. Quickly, Amos was appointed as probate judge. He nullified all previous claims and asserted his own. However, Short failed to fully register his claim before his untimely death 1853. Esther anxiously filed her husband’s claim posthumously. On July 28, 1855, Esther’s plat for the town of Vancouver was filed. After gaining her right to the land, she donated four square blocks to the City for the purpose of a public square or plaza. Originally named the City Commons, the park was a common place to graze livestock until the 1870s. 

The Park enjoyed many prosperous years, but in the 1960s began to experience a decline and fell into disrepair by the 1990s. It wasn’t until many City and civic leaders, including Mayor Royce Pollard, pushed that the Park was revitalized. One of the contributors to the Park’s revitalization was George Propstra, philanthropist and founder of the burger chain Burgerville, who donated $3.2 million to the Park’s revival fund. By 2002, the Park saw a resurgence, reflected in improvements such as the Salmon Run Bell Tower and the influx of happy visitors. Today the Park is home to a multitude of events that celebrate the community and the diverse citizens of Vancouver.`,		year: "1855",
		content: [
			{
				type: "story",
				images: estherImages,
				location: cdn + "/esther.mp3",
				thumbnail:
					cdn + "/images/esther/historic/1.jpg"
			},
			{
				type: "video",
				title: "The Legend of Esther Short",
				location: cdn + "/videos/esther-video.mp4",
				thumbnail:
					cdn + "/videos/esther-thumbnail.jpg"
			}
		],
		backgroundImage: `${cdn}${backgroundImages}esther.png`,
		headerImage: getHeader('esther'),
		splashVideo: getVideo('esther')
	},
	{
		name: "evergreen",
		niceName: "Evergreen Hotel",
		lat: 45.625218,
		lng: -122.672039,
		descriptions: [
			["Architect", "Tourtellotte and Humme"],
			["Style", "Italian Renaissance"],
			["Prominent People", "George C. Marshal"]
		],
		longDescription: `
The Evergreen Hotel, opened in March of 1928, signaled Clark County’s early aspirations to build an urban economy in coordination with its continuing agricultural industries. Throughout American history, hotels have often been viewed as symbols of economic growth and urbanization. This seems to be exactly what the leadership in 1920s Vancouver had in mind. The building’s construction garnered so much support from a grassroots solicitation drive that it collected $6,000 above the necessary fund to erect this hotel. 

Supported by over 400 prominent Vancouver citizens and championed by the chamber of commerce, the Evergreen Hotel symbolized the city’s growing economic power and urbanization. It clearly represented a transition out of this early urban phase and provided a key location for business and commerce that was situated on what was at the time Vancouver’s main arterial roads. Additionally, it allowed a place for distinguished figures to visit and dine. During his time at the Vancouver Barracks, future United States Secretary of State and Secretary of Defense George C. Marshall dined here. This was before he advocated for the economic recovery plan for post-war Europe that would eventually bear his name. 

By the late 1950s and early 1960s, much of the focus on Vancouver’s economic growth shifted from the downtown core. In the mid- to late-1960s, efforts for “urban renewal” were taking hold across the nation. Vancouver was swept up in this effort, but it did little to rejuvenate the heart of the city. As a result, the hotel fell into disrepair and was slated for condemnation in 1977. However, the community rallied, and the building was spared from the wrecking ball. It was placed on the National Register of Historic Places in 1979. After sitting empty for several more years, private developers rehabilitated the building and turned it into a senior living center in 1987, which it has remained to this day.		`,
		year: "1928",
		content: [
			{ type: "audio", thumbnail: getAudioImage('evergreen'), location: getAudioLocation('evergreen') },
			{
				type: "video",
				title: "Evergreen Video",
				location:
					cdn + "/videos/evergreen-video.mp4",
				thumbnail:
					cdn + "/videos/evergreen-thumbnail2.jpg"
			}
		],
		backgroundImage: `${cdn}${backgroundImages}evergreen.png`,
		headerImage: getHeader('evergreen'),
		splashVideo: getVideo('evergreen')
	},
	{
		name: "heritage",
		niceName: "Heritage Building",
		lat: 45.625856,
		lng: -122.671356,
		descriptions: [
			["Architect", "Dennis Nichols"],
			["Style", "Beaux Arts"],
			["Prominent People", "Jesse Morrison Langsdorf, Everal Carson"]
		],
		longDescription: `
In the late 19th Century, Vancouver leaders watched as steel buildings across the nation stretched higher into the atmosphere. Like urban stalagmites with steel skeletons, these structures started to form the iconic skylines of many prominent American cities. In early 1912, Vancouver started work on its own brick and steel goliath with the desire of joining the ranks of the ever-increasing number of cities with skyward-bound buildings and rising prominence. At the time of its opening in 1913, the United States National Bank building, known today as the Heritage Building, was the tallest in Vancouver and a modern leap forward for local architecture and construction. With its five storeys, steel-framed structure, brick walls, terra-cotta decoration, stylized ornamentations, and elevator, the grand building stood as a hopeful sign of the impending modernization of buildings in early 20th-Century Vancouver. The community was so fascinated by the modern amenities of this building that it was reported at the time that “since the elevator has been in operation quite a number of people have ridden in it just for the novelty.” The excitement for this new structure was exactly what the leadership of the bank had in mind.

Jesse M Langsdorf, bank president and driving force behind the construction of this building, proclaimed to the Morning Oregonian that “It is my desire to give Vancouver a bank for the people…we are going to leave nothing undone that will serve to provide convenient facilities, beautiful surroundings, and a building in keeping with the merited growth of Vancouver.” He further noted, “I have outfitted a number of banks in my long banking career, but this will be the best work undertaken.” It was clear the structure, rather than the institution, was the treasure Langsdorf and his associates felt they were bringing to the community. However, the bank also did well financially, reporting over $700,000 in individual deposits in 1913. Adjusted for inflation, that would equate to $18,388,761 today.

The bank thrived until 1933, when it failed as a result of the Depression. In 1934, the location served as the Clark County National Bank and remained so for 16 years. In the 1950s, the building began to lose most of its tenants to new constructions, with the exception of the loyal Everal Carson, Attorney at Law. Carson remained in the building for 51 years, from 1932 to 1983. Ownership of the building changed throughout the 1980s while attempts were made to raise funds for restoration. In 1987, funds to restore the building were obtained, and it was brought back to its original glory.  Renamed the “Heritage Building,” a dedication ceremony for it was held in 1988. In attendance was Mayor Bruce Hagensen as well as an actor playing the role of President Taft, the commander-in-chief at the time of the building construction. Today, the Heritage Building remains a symbol of Vancouver’s first leap into a modern era of architecture and construction.`,
		year: "1912",
		content: [{ type: "audio", thumbnail: getAudioImage('heritage'), location: getAudioLocation('heritage')  }, { type: "story", images: heritageImages, thumbnail: heritageImages[1], location: cdn + "/heritage-story.mp3" }],
		backgroundImage: `${cdn}${backgroundImages}heritage.png`,
		headerImage: getHeader('heritage'),
		splashVideo: getVideo('heritage')
	},
	{
		name: "hidden",
		niceName: "Hidden House",
		lat: 45.631389,
		lng: -122.672193,
		descriptions: [
			["Architect", "L.M. Hidden, Oliver Hidden"],
			["Style", "Queen Anne Style"],
			["Prominent People", "Hidden Family"]
		],
		longDescription: `
From Providence Academy to prune orchards, the Hidden Family, led by Lowell Mason Hidden (L. M. Hidden), was foundational in the physical and economic construction of Vancouver and Clark County. This house, built by Hidden around 1885, has stood as an enduring marker of the opportunity for early industries in Vancouver. Incorporated in 1857, Vancouver was still searching for its footing in the regional economy when Hidden arrived in the area from Vermont. Here he found an abundance of opportunity in the young city situated on the north bank of the Columbia River. 

After only a year, Hidden was able to purchase land to the west of what is now Main Street and spanned from 13th to 19th for the sum of $500. Just a little north of where this house stands he constructed a modest cabin. Hidden returned to Vermont and married Mary Sherbon Estman. Upon his return, he was accompanied by his new bride and his brother Arthur. In 1871, Hidden established the Hidden Brick Company. Soon after, his company provided bricks for one of Vancouver’s most iconic structures, Mother Joseph’s House of Providence, also known as Providence Academy. Over the ensuing decades, Hidden brick would be used in the construction of numerous homes, schools, churches, and commercial buildings. The Proto-Cathedral of St. James the Greater, the Vancouver Public Library (Clark County Historical Museum), and Hough Elementary School are only a few of the buildings constructed with Hidden brick. Lowell’s sons, Foster and Oliver, carried on the family business and eventually Foster’s son, Robert, took over operations.

While Lowell M. Hidden was launching a brick business and shaping Vancouver, his brother, Arthur, was also busy at work planting the area’s first prune orchard. It is reported that at his orchard near 26th and Main, Arthur built and operated a large prune dryer. Little did he know this would impact the economic fortunes of not just Vancouver, but all of Clark County. Over the next several decades the prune industry would grow until Clark County earned the title of “Prune Capital of the World.” 

The family continued to manufacture bricks well into the late 20th Century. However, by the 1980s they produced bricks only occasionally. From a count of roughly a million bricks a year to about 10,000 annually, the Hidden family’s brick operation slowed, and as Robert Hidden noted, “it is a lot of hard work, and we don’t make much money on it. We do it because we like it.” The final incarnation of the Hidden’s brickmaking operation still stands near the intersection of Fourth Plain Road and Kauffman Road. However, Robert saw the value in Vancouver’s history and his family’s legacy and purchased Providence Academy in 1969 to spare it from the wrecking ball. The Hidden family to this day continues to advocate for preservation of the history they were instrumental in creating. `,
		year: "1885",
		content: [
			{
				type: "video",
				title: "The Birth of Penguin Nation",
				location:
					cdn + "/videos/hidden-video.mp4",
				thumbnail:
					cdn + "/videos/hidden-thumbnail.jpg"
			},
			{
				type: "video",
				title: "The Origins of Clark College",
				location:
					cdn + "/videos/hidden2-video.mp4",
				thumbnail:
					cdn + "/videos/hidden2-thumbnail.jpg"
			}
		],
		backgroundImage: `${cdn}${backgroundImages}hidden.png`,
		headerImage: getHeader('hidden'),
		splashVideo: getVideo('hidden')
	},
	{
		name: "kiggins",
		niceName: "Kiggins Theatre",
		lat: 45.629326,
		lng: -122.671201,
		descriptions: [
			["Architect", "Day Hilborn"],
			["Style", "Art Deco"],
			["Prominent People", "John P. Kiggins, Day Hilborn, Bettyan Howard"]
		],
		longDescription: `
The evening of April 24, 1936, found Vancouver buzzing with anticipation as electricity coursed through the marquee of Vancouver’s new crown jewel, the Kiggins Theatre, named after the nine-time mayor and two-time Clark County Commissioner John P. Kiggins. Designed by renowned local architect Day Hilborn, Kiggins Theatre embodied Art Deco artistry. Construction started on September 20th, 1935, and used materials from local businesses in Vancouver. The Vancouver Central Wood Company provided the wood, and the Vancouver Sign Company provided the lights and neon lettering. The theater was hailed by the press as a “design masterpiece.” The first film shown in the theater was "She Married Her Boss." Today, few are aware that the theater’s namesake, John P. Kiggins, was one of the most influential figures in early 20th-Century Clark County.

John P. Kiggins, born in Tennessee and raised in Washington D.C., arrived at Vancouver Barracks in 1892 as a soldier in the 14th Infantry. His regiment was assigned to aid Alaskan Gold Rush prospectors and later served in the Spanish-American War. He saw potential in Vancouver and chose to make it his home. Kiggins quickly established a hardware store, plumbing business, and construction operations. However, he had aspirations beyond business.

Kiggins’s political career began with his election to the Vancouver City Council in 1908. One year later, Kiggins ran for mayor and won. In his first address, Kiggins advocated for a new municipal water system; underground electric, telegraph, and telephone lines; and additional street lights. As mayor, he oversaw improvements to Vancouver’s infrastructure and the construction of St. Joseph’s Hospital. Dr. Charles Irwin, a prohibitionist candidate, defeated Kiggins in the 1911 mayoral race. Kiggins went on to serve as Clark County commissioner for two terms, was considered a possible Washington State gubernatorial candidate, and eventually returned to the office of mayor, a position he held nine times. 

In 1910, Kiggins launched his first entertainment venue, the Grand Theatre opera house at 10th and Main. Over the following decades, Kiggins managed or built several theaters, such as the American, the USA, and the Castle. Kiggins was also a sports fanatic and an accomplished amateur ballplayer. In 1918, Kiggins unsuccessfully lobbied the Pacific Northwest International Baseball League for a Vancouver professional team.

All venues constructed or owned by Kiggins have been demolished or repurposed, with the exception of the Kiggins. Renovated and placed on the National Register of Historic Places, the Kiggins Theatre experienced a renaissance, regaining the glow of that spring evening in 1936 when motion pictures first graced its screen. `,
		year: "1935",
		content: [
			{
				type: "video",
				title: "Popcorn Betty",
				location:
					cdn + "/videos/kiggins-video.mp4",
				thumbnail:
					cdn + "/videos/kiggins-thumbnail.jpg"
			}
		],
		backgroundImage: `${cdn}${backgroundImages}kiggins.png`,
		headerImage: getHeader('kiggins'),
		splashVideo: getVideo('kiggins')
	},

	{
		name: "providence",
		niceName: "Providence Academy",
		lat: 45.629479,
		lng: -122.668181,

		descriptions: [
			["Architect", "Mother Joseph Pariseau "],
			["Style", "Neo-Georgian"],
			["Prominent People", "Mother Joseph of the Sacred Heart"]
		],
		longDescription: `
The House of Providence, commonly known as “Providence Academy,” is one of the most significant pieces of historic architecture in the Pacific Northwest. Completed in 1874, Providence Academy is the earliest remaining example of many charitable institutions built throughout the region by Mother Joseph of the Sacred Heart and the Sisters of Providence. For nearly a century, it served as a boarding school, orphanage, and headquarters for the sisters.

In 1856, Mother Joseph led a group of four missionary sisters from Montreal to the Washington Territory. The sisters came with the intention of caring for the poor and sick, establishing a school, and bringing their faith to the community. 

Upon their arrival, it was discovered that no preparations had been made to accommodate them. If they were dismayed, there was no indication of this, and they quickly set to work. Soon they opened the boarding school that would eventually become Providence Academy. Two years after their arrival, they established St. Joseph Hospital, the first permanent hospital in the Pacific Northwest.

In addition to her work in Vancouver, Mother Joseph was charged with the mission of overseeing the financing and construction of all the sisters’ buildings in the region. 

Subsequently, she would endure a number of arduous journeys throughout the Pacific Northwest over two decades to raise the necessary funds to build and maintain educational and healthcare institutions. The grandest of these efforts was Providence Academy.
	
On January 19, 1902, Mother Joseph of the Sacred Heart passed away. In her last words, she said, “My dear sisters, allow me to recommend to you the care of the poor in our houses, as well as those without. Take good care of them; have no fear of them; assist them and receive them. Then you will have no regrets. Do not say: ‘Ah! This does not concern me, let others see them.’ My sisters, whatever concerns the poor is always our affair.” 

The school would go on for another 64 years after her passing. Its final class completed its courses in 1966. However, her incredible spirit and legacy inspired those in the community to save her building.
	
In 1969, Robert Hidden, the great-grandson of Hidden Brick Company founder Lowell Mason Hidden, purchased the building. His family legacy was enshrined in every Hidden brick used to compose Mother Joseph’s architectural masterpiece. As a result, the building was not lost and eventually was purchased by a local heritage group, The Historic Trust. It has worked to reconnect many of the alumnae of Providence Academy to this important space. Today, within its halls, interpretative displays communicate to a new generation the faith and feats of a group of sisters that arrived in this place in 1856.`,
		year: "1873",
		content: [{ type: "audio", linkToVideo: true, thumbnail: getAudioImage('providence'), location: getAudioLocation('providence')  }, { type: "video", location: cdn + "/videos/providence-video.mp4", thumbnail: cdn + "/videos/providence-thumbnail2.jpg", title: "Begging Tours" }],
		backgroundImage: `${cdn}${backgroundImages}providence.png`,
		headerImage: getHeader('providence'),
		splashVideo: getVideo('providence')
	},
	{
		name: "schofield",
		niceName: "Schofield Building",
		lat: 45.625871,
		lng: -122.671923,
		descriptions: [
			["Architect", "Schofield Family"],
			["Style", "Italianate/Beaux Arts Style"],
			[
				"Prominent People",
				"Nicholas Schofield, Edward Schofield, Mary Schofield (x2)"
			]
		],
		longDescription: `
This block, known as the Schofield Block, stands as a testament to the works of the Schofield family who played an important role in building the business community in Vancouver. As the early urban spaces in the West developed, husbands and wives found it beneficial to maintain independent and/or joint businesses. This was exactly the case for two generations of the Schofield family. Nicolas Schofield, an Irish immigrant, arrived in Vancouver around 1861; Mary Elizabeth Smith, widow of local merchant Frederick Miller, arrived in Vancouver in 1855. They were married in 1863. Upon his arrival, Nicolas quickly established a large general merchandise store in the city, and eventually, Mary took over operation of the store located here at Sixth and Main. In this shop, Mary provided the community with a large selection of clothing for women and children, shoes, groceries, and other household goods. With growth in mind, the Schofields expanded their business interests and by the 1890s were operating a local brickyard. Additionally, by the time of Nicolas’s and Mary’s deaths, respectively in 1897 and 1902, the couple had amassed large amounts of property to bestow to the next generation of the Schofield family. It is believed that in the 1880s, Nicholas and Mary Schofield constructed the building that resides on the southeast corner of this block. 

After his parents’ passing, Edward R. Schofield took up the Schofield family legacy and was an industrious civic leader in early 20th-Century Vancouver. On February 7, 1907, Edward married Mary Elizabeth Conboie. Between 1906 and 1907, the Beaux Arts-style building located directly north was built by the Schofields. Edward went on to become a member of the Vancouver City Council and eventually mayor. Mary also led an industrious life as an active businesswoman and gaining the honor of being the first woman bank director in Washington. The wives and husbands of two generations of Schofields left an indelible mark on the early commercial development of Vancouver.`,
		//year: 'circa 1880/1906',
		year: "1880",
		content: [{ type: "audio", linkToAr: true, thumbnail: getAudioImage('schofield'), location: getAudioLocation('schofield')  }],
		backgroundImage: `${cdn}${backgroundImages}schofield.png`,
		headerImage: getHeader('schofield'),
		splashVideo: getVideo('schofield')
	},

	{
		name: "slocum",
		niceName: "Slocum House",
		lat: 45.62616,
		lng: -122.675759,
		descriptions: [
			["Architect", "Unknown"],
			["Style", "Victorian Modified Italianate villa"],
			["Prominent People", "Charles and Laura Slocum"]
		],
		longDescription: `
In the mid-19th Century, many ventured west with the dream of claiming flourishing economic and social opportunities in young urban centers such as Vancouver. The Slocum House, built by Charles W. Slocum in 1877, stands as an iconic symbol of this movement and its underlying narrative. The story begins when, at the age of twenty-two, an ambitious Charles W. Slocum left Massachusetts to journey west via South America. Slocum braved the perilous journey across the thin slice of land known as the Isthmus of Panama that separated the Atlantic and Pacific Oceans. Once he reached the Pacific side, Slocum boarded the Golden Gate, a steamer bound for the Pacific coast of North America. After stops in San Francisco and Portland, Slocum found work as a carpenter at Vancouver Barracks in 1857. He remained in this humble position only a few years. 

By 1860, Slocum, aspiring to build his own fortune in this budding Western town, opened a general store in Vancouver, Washington, with partner James Crawford. Soon after, Slocum secured contracts to supply the US Army. His business quickly expanded as he opened additional stores in Walla Walla, Washington, and in Lewiston and Boise City, Idaho. With the lack of railroads east of Vancouver, Slocum used 30 10-mule teams to deliver his goods across the region. In 1869, Slocum sold all of his holdings except for the original Vancouver store. As a result of Charles’s business, the Slocums amassed enough wealth to build a home in the style of a family home located back East. This elegant home took form in 1877 and on New Year’s Day, 1878, Charles and Laura opened their new home to Vancouver’s high society. 

The Slocums remained in the house for some time, but eventually the couple moved out of the home. Charles passed away in 1912. When Laura died two years later, most of their property went to nieces and nephews. The house was saved and moved to Esther Short Park during Vancouver’s urban renewal in 1966 and opened as a theater in 1972. The opening production was Esther Short, or a Heroic Pioneer Mother, written and directed by Hermine Decker Duthie. This home stands proudly as the last survivor of a neighborhood razed long ago, offering a glimpse into the early Vancouver elite. `,
		year: "1877",
		content: [
			{
				type: "video",
				title: "Slocum Hauntings",
				location:
					cdn + "/videos/slocum-video.mp4",
				thumbnail:
					cdn + "/videos/slocum-thumbnail.jpg"
			}
		],
		backgroundImage: `${cdn}${backgroundImages}slocum.png`,
		headerImage: getHeader('slocum'),
		splashVideo: getVideo('slocum')
	},
	{
		name: "smith",
		niceName: "Smith Tower",
		lat: 45.625458,
		lng: -122.672444,
		descriptions: [
			["Architect", "Keith Bradbury, Henry Grebrook"],
			["Style", "Modern"],
			["Prominent People", "W.R. Smith"]
		],
		longDescription: `
Designed by architects Keith Bradbury and Henry Grebrook, the Smith Tower was built in 1966 and was one of the first buildings on the West Coast to employ new architectural and construction techniques. Constructed using the “Lift Slab” technique, the concrete floors were cast on top of each other and then raised around the central stairwell. Due to the circular shape of the building, this is often colloquially referred to as “the pancake building method.” At the time, the building was the second ever to be constructed using this method as well as the largest. The project was well supported by local labor groups and the primary focus was to provide decent and affordable homes for trade union retirees. With a height of 158 feet, the Smith Tower is currently the second tallest building in Vancouver.`,
		year: "1966",
		content: [{ type: "audio", linkToAr: true, thumbnail: getAudioImage('smith'), location: getAudioLocation('smith')  }],
		backgroundImage: `${cdn}${backgroundImages}smith.png`,
		headerImage: getHeader('smith'),
		splashVideo: getVideo('smith')
	}
];

const audioStories = {
	arts: `
The passage and repeal of national prohibition in the United States impacted far more than American’s ability to get a beer. It also impacted workers and labor unions. On February 2, 1935, a fight broke out in the Pit Café between members of the Teamsters and brewery workers unions, leaving the restaurant damaged, two men hospitalized, and three jailed. A year earlier, Charles Burchfield was praised for opening a new union hall in the basement of the Arts Building, including the Pit café and bar, where local workers gathered. Tensions simmered for months as both unions struggled for post-prohibition jurisdictional control. 

Vancouver's Star Brewery, which operated from 1856 until state prohibition closed it in 1916, reopened in 1933 following the national AFL directive granting jurisdiction to the Teamsters. The United Brewery, Flour, Cereal and Soft Drink Workers of Portland and Vancouver contested the AFL assignment in court, and local brewery workers refused to join the Teamsters. The Clark County Central Labor Council supported them, and Burchfield agreed not to serve “unfair” (Teamster-produced) beer at the Pit, setting the stage for the brawl. This brawl occurred specifically between a group of brewery workers and Portland teamsters. John Kreiger, one of the Portland teamsters in the café at the time, testified in court how the fight started. He recalled how Burchfield called the Teamsters “rats” and “scabs” and accused them of breaking the Portland longshoremen’s strike. When one of Burchfield’s associates was getting physical with a teamster in the barroom, Kreiger called in his fellow Teamsters help fight back. 

This was when the chaos truly began, and the fight broke out. During the commotion, Kreiger witnessed Burchfield climbing over a mass of men to hit one of the Teamsters over the head with a bottle. One eyewitness’s account paints a vivid picture of the temperaments of the men involved in the fight. Dick Lackney, one of the defendants during the trial, admitted to having about six drinks of beer and wine and couldn’t remember much of what happened except that pretty soon he was fighting for his life. In reporting the brawl, the local newspapers labeled the event the “Pit Café Riot.”`,
	cchm: `
The foundation of the public library was built on education for all. While many could come visit a library, some were unable to make the trip. As a result, the mobile library found its roots when librarian Mary Titcomb, inspired by reports of mobile libraries in England, started the first bookmobile in Maryland. Eva Santee, a prominent figure in the Fort Vancouver Regional Library (FVRL) District, must have noted this history. Back when this building was a library, she was responsible for updating the library’s inventory, cataloging the entire collection, revamping the library to meet the needs of the audience, and working to reach all residents. Her main motto was, “Library service for all!” As a result, Santee extended the reach of her library just as Titcomb had at the turn of the 20th century.

In her first year, she worked with the Washington State Library to secure funding through a WPA grant for a bookmobile, which was primarily a "library on wheels." The first iteration was filled with 2,500 books and made its way everywhere from small-town libraries, schools, and farms in 1941. In 1943, local residents approved support for the bookmobile services through taxes collected.

For the next several decades, the bookmobile program continued to provide rural library services across Southwest Washington. However, around 2011, Operations Director Patty Duitman worked to install non-mobile rural library service. As a result, the bookmobile was retired and in its place a number of express libraries were opened.

Though the FVRL bookmobile is no longer driving the roads of Clark County, you can click below to get a closer look at the bookmobile in virtual form!`,
	elks: `
For members of the Vancouver Elks, service to the community did not end with their collection efforts through the organization, but could extend to their own daily lives. Elks member Ira Cresap had a distinguished career in law enforcement in Vancouver in the early part of the 20th Century. Serving as a sheriff in 1914 and appointed police chief in 1922 by Mayor John P. Kiggins, Ira was well known across the county as an earnest and honest man. His commitment was never more genuine than when Ira was still a patrolman on the streets of Vancouver in 1914. As the myth goes, when Ira was facing off in a gunfight with a would-be criminal, his Elks pin saved his life.`,
	esther: `
The story we know of Esther Short and her family is less a documented account from her life and times than a foundation mythos for this young Western city. This mythos vividly recounts the struggles of the Shorts and those of their community. The Shorts arrived in 1845; however, Esther’s legend took root in 1897 in the work of official Vancouver historian Glenn Ranck, a work he titled “Esther Short and the Red Coats.” In his narrative, Ranck bridged the founding gap for the West and built Esther Short up as a colonial-era American-type of figure. Here he told the grand stories many know today. The story we present here is less Esther’s and more about Ranck’s legendary figure. 

In the years after the Shorts’ arrival in the area, they found themselves at odds with the Hudson’s Bay Company. The company made several attempts to force the Shorts off the property and on multiple occasions began to tear down the family’s fence. After continued harassment, the conflict reached a boiling point when Amos Short shot and killed two men attacking his homestead. Amos was acquitted of all charges by a territorial judge, but it was during his trial that the HBC made its final attempt to claim the Short’s land. Legend has it that Esther Short was able to defend the property from a band of HBC marauders by herself.  According to the founder of the Clark County Historical Society Glenn Ranck, the HBC ordered French Lieutenant Francois Facette and several other men to tear down the rail fence on the Short property line. In Ranck’s account of the legend, he states, “Just as Facette put his hands upon the topmost rail and began to wrench it from its place, by a deft swing of her arm [Esther] struck him with the palm of her hand, a stinging blow across the cheek. Before he realized it, the astonished fur trapper was lying on the greensward at his conqueror’s feet.” After this encounter, Facette returned to the fort and relayed his defeat to his commanders. He is quoted as saying, “I guess we had better give it up; we can never hope to win against such brave women as that.” 

After this encounter, the HBC finally relented, and the Shorts lived peacefully. In 1850, Amos Short became a probate judge and changed the name of the land from Williamson’s original designation of “Vancouver City” to “Columbia City.” Amos died in a boating accident in 1853 when on his way back from a trip to California, the ship Vandalia went down entering the Columbia River. That same year, Congress approved the formation of the Washington Territory, and two years later, in 1855, the land’s named was changed from “Columbia City” back to “Vancouver.” While there are murky historical records of the conflict between the Short and the HBC, Ranck’s account is the prevailing version of the myth of the Short family. Whether or not Ranck’s work is completely rooted in fact, it went on to inspire the leaders of Vancouver. His mythmaking became the elements, both concrete and mythical, that the civic leaders envisioned as they built the city. It all emanates from the park named after Esther Short.
	`,
	evergreen: `
In 1928, Vancouver installed electric lighting for the downtown area. The electric lighting represented a transition out of Vancouver’s early urban phase and shed light on its brand new hotel. This sentiment was evident in the fact that Evergreen Hotel’s grand opening ceremony in March of 1928 coincided with the activation of electric lighting. In the decades preceding the addition of electric street lights, city leaders commented on “the dark streets, except where certain citizens…erected lamps [that] cast a sickly light from coal oil burners.” The new lights were a vast improvement.

Harkening back to the Vancouver’s connection with the Hudson’s Bay Company at Fort Vancouver, the grid was activated from London by Hudson’s Bay Company governor, Charles B. Sale. The longest at the time, a transcontinental cable had been constructed, crawling on the seafloor all the way to London. The people rejoiced when the Evergreen Hotel and other buildings were suddenly illuminated that evening, and a future of continuing urbanization in Vancouver could be clearly seen.
	`,
	heritage: `
	During the 1920s and 1930s, bank robberies and organized crime were on the rise nationwide. While Vancouver remained relativity quiet, it was not completely immune to this trend. The attempted robbery of the US National Bank Building on July 1, 1925, by Joyce D. Thomason is an enduring local memory of this era in our history. His efforts were thwarted by Officer Harry Williams, who reportedly shot Thomason in both the head and liver. Miraculously, Thomason lived for another eight days, during which he was identified as responsible for the Dayton [OR] Bank robbery that same year.`,
	providence: `Mother Joseph served for over a decade as the superior of the western missions. Eventually, she was appointed treasurer. In this role, she was responsible for the financing and construction of buildings in the region. As a result, she embarked on frequent “begging tours.” On these travels, she could find herself taking all manner of transport. From steamer to stagecoach and horseback to train, each journey presented its own eccentricities and challenges. One such journey of 18 days and took her from the Lower Columbia to the Rocky Mountains.`,
	schofield: `As the Western states modernized to become more like the East, certain laws became difficult to implement. Unlike in the East, many Western families still relied on livestock, so when Ordinance No. 93 was passed in 1876 restricting free roaming livestock, there was some backlash. One particular rebel was Mary Schofield.

Her dairy cow roamed freely about the streets, grazing wherever it pleased. After two months of the cow’s freedom, a conflict arose. The cow was impounded. Mrs. Schofield was offended, though, so she filed a suit against city council Justice Hayden. A month or so later, the cow was released and Ordinance No. 93 was repealed, allowing livestock to roam free in Vancouver once again. Enjoy interacting with Mrs. Schofield’s cow in this experience.`,
	smith: `
The foundation of the public library was built on the idea of education for all. While many could visit a library, some were unable to make the trip. As a result, the mobile library found its roots when librarian Mary Titcomb, inspired by reports of mobile libraries in England, started the first bookmobile in Maryland. Eva Santee, a prominent figure in the Fort Vancouver Regional Library (FVRL) District, must have noted this history. Back when this building was a library, she was responsible for updating the library’s inventory, cataloging the entire collection, revamping the library to meet the needs of the audience, and working to reach all residents. Her main motto was, “Library service for all!” As a result, Santee extended the reach of her library just as Titcomb had at the turn of the 20th century.

In her first year, she worked with the Washington State Library to secure funding through a WPA grant for a bookmobile, which was primarily a "library on wheels." The first iteration was filled with 2,500 books and made its way everywhere from small-town libraries, schools, and farms in 1941. In 1943, local residents approved support for the bookmobile services through taxes collected.

For the next several decades, the bookmobile program continued to provide rural library services across Southwest Washington. However, around 2011, Operations Director Patty Duitman worked to install non-mobile rural library service. As a result, the bookmobile was retired and in its place a number of express libraries were opened.

Though the FVRL bookmobile is no longer driving the roads of Clark County, you can click below to get a closer look at the bookmobile in virtual form!`
};

class Locations {
	getAll(res) {
		res.send(locations);
	}

	getAudioStories(res) {
		res.send(audioStories);
	}

	getOne(res, name) {
		res.send(locations.find(loc => loc.name === name) || {});
	}
}

module.exports = new Locations();
