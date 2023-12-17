
import React from 'react'
import NavBar from './NavBar'

export default function Kawazaki() {
    return (
        <>
            <NavBar />
            <div className="flex flex-col gap-2 bg-white" >
                <div className="w-full bg-center bg-cover bg-[url('https://content2.kawasaki.com/ContentStorage/KMC/ProductTrimGroup/73/9e8f7a3a-a7dc-4fa8-853c-94f2fa1d532e.jpg?w=1920')]"
                >
                    <div className="flex items-center justify-start w-full h-full bg-opacity-50 py-64">
                        <div className="text-left">
                            <div className="container px-4 mx-auto">
                                <div className="flex flex-col items-start gap-2 justify-center max-w-4xl px-4 mx-auto text-left">
                                    <Branding />
                                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-100">Lorem </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-between px-12 py-6 border-b-4 border-b-green-400">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <span className="px-6 cursor-pointer capitalize text-lg font-bold text-gray-500 hover:text-gray-700 border-b-4 border-b-transparent hover:border-b-4 hover:border-b-green-400">Motors</span>
                        <span className="hidden md:inline h-6 border-r border-gray-300 border-opacity-60"></span>
                        <span className="px-6 cursor-pointer capitalize text-lg font-bold text-gray-500 hover:text-gray-700 border-b-4 border-b-transparent hover:border-b-4 hover:border-b-green-400">Parts</span>
                        <span className="px-6 cursor-pointer capitalize text-lg font-bold text-gray-500 hover:text-gray-700 border-b-4 border-b-transparent hover:border-b-4 hover:border-b-green-400">Products</span>
                        <span className="px-6 cursor-pointer capitalize text-lg font-bold text-gray-500 hover:text-gray-700 border-b-4 border-b-transparent hover:border-b-4 hover:border-b-green-400">Gadgets</span>
                    </div>
                    <div className="flex"></div>
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-8 px-12 py-8">
                    <div className="w-full flex flex-col md:flex-row items-center md:items-end">
                        <h3 className=" w-fit text-center text-4xl lg:text-5xl font-bold text-black">MOTORS </h3>
                        <span className="md:w-full md:border-b-2 md:border-green-300 md:border-opacity-800"></span>
                    </div>
                    <div className="md:h-96 w-full flex flex-col md:flex-row justify-evenly shadow-lg">
                        <div className=" w-full md:w-1/2 aspect-square bg-center bg-cover bg-[url('https://content2.kawasaki.com/ContentStorage/KMC/Products/9158/9ea1a651-fc63-4550-90c3-6d205453ad7d.jpg?w=800')]"
                        >
                        </div>
                        <div className="p-4 flex flex-col items-start justify-between gap-4">
                            <span className="text-left capitalize text-black text-base font-bold">
                                Kawazaki Z100
                            </span>
                            <span className="w-full border-b border-gray-200"></span>
                            <div className="w-full flex flex-col items-start gap-4">
                                <p className="text-black text-xl font-bold">
                                    ADDITIONAL VEHICLE FEATURES:
                                </p>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                </ul>


                            </div>
                            <button className="bg-black text-white font-Oswald text-uppercase py-2 px-3 md:py-4 md:px-5 font-semibold rounded inline-block">
                                <span className="w-0 h-0 px-2 text-green-500" >-</span>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-8 px-12 py-8">
                    <div className="w-full flex flex-col md:flex-row items-center md:items-end">
                        <h3 className=" w-fit text-center text-4xl lg:text-5xl font-bold text-black">MOTORS </h3>
                        <span className="md:w-full md:border-b-2 md:border-green-300 md:border-opacity-800"></span>
                    </div>
                    <div className="md:h-96 w-full flex flex-col md:flex-row justify-evenly shadow-lg">
                        <div className=" w-full md:w-1/2 aspect-square bg-center bg-cover bg-[url('https://content2.kawasaki.com/ContentStorage/KMC/Products/9158/9ea1a651-fc63-4550-90c3-6d205453ad7d.jpg?w=800')]"
                        >
                        </div>
                        <div className="p-4 flex flex-col items-start justify-between gap-4">
                            <span className="text-left capitalize text-black text-base font-bold">
                                Kawazaki Z100
                            </span>
                            <span className="w-full border-b border-gray-200"></span>
                            <div className="w-full flex flex-col items-start gap-4">
                                <p className="text-black text-xl font-bold">
                                    ADDITIONAL VEHICLE FEATURES:
                                </p>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                </ul>


                            </div>
                            <button className="bg-black text-white font-Oswald text-uppercase py-2 px-3 md:py-4 md:px-5 font-semibold rounded inline-block">
                                <span className="w-0 h-0 px-2 text-green-500" >-</span>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-8 px-12 py-8">
                    <div className="w-full flex flex-col md:flex-row items-center md:items-end">
                        <h3 className=" w-fit text-center text-4xl lg:text-5xl font-bold text-black">MOTORS </h3>
                        <span className="md:w-full md:border-b-2 md:border-green-300 md:border-opacity-800"></span>
                    </div>
                    <div className="md:h-96 w-full flex flex-col md:flex-row justify-evenly shadow-lg">
                        <div className=" w-full md:w-1/2 aspect-square bg-center bg-cover bg-[url('https://content2.kawasaki.com/ContentStorage/KMC/Products/9158/9ea1a651-fc63-4550-90c3-6d205453ad7d.jpg?w=800')]"
                        >
                        </div>
                        <div className="p-4 flex flex-col items-start justify-between gap-4">
                            <span className="text-left capitalize text-black text-base font-bold">
                                Kawazaki Z100
                            </span>
                            <span className="w-full border-b border-gray-200"></span>
                            <div className="w-full flex flex-col items-start gap-4">
                                <p className="text-black text-xl font-bold">
                                    ADDITIONAL VEHICLE FEATURES:
                                </p>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                    <li className="flex text-gray-800 dark:text-gray-400 space-x-3">
                                        <span className="text-green-600 w-1 inline-block mr-2">&#9642;</span>
                                        998cc liquid-cooled, inline four-cylinder engine
                                    </li>
                                </ul>


                            </div>
                            <button className="bg-black text-white font-Oswald text-uppercase py-2 px-3 md:py-4 md:px-5 font-semibold rounded inline-block">
                                <span className="w-0 h-0 px-2 text-green-500" >-</span>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

const Branding = () => {
    return (
        <svg focusable="false" className="svgSize" width="250px" height="32px" viewBox="0 0 250 32" version="1.1">
            <title>z650</title>
            <g data-id="z650" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M184.933172,15.8458667 C184.26881,15.2544 183.415086,14.7765333 182.377319,14.4405333 C181.329446,14.0997333 180.104977,13.9050667 178.721465,13.9013333 L141.919841,13.9013333 L142.427288,12.6026667 C142.818778,11.5861333 143.678885,10.7205333 144.982609,10.0314667 C146.229951,9.36746667 147.562931,9.04373333 148.967719,9.04853333 C148.967719,9.04853333 178.508167,9.04373333 181.727319,9.04853333 C184.941151,9.05066667 189.349133,5.07301729 189.349133,5.07301729 L150.659741,5.07306667 C149.025166,5.06933333 147.427292,5.27733333 145.829951,5.6832 C144.238992,6.0976 142.746437,6.65973333 141.396436,7.36213333 C140.064521,8.0576 138.897498,8.888 137.928881,9.82666667 C136.980476,10.7434667 136.293241,11.7349333 135.883666,12.7738667 L133.899622,17.8778667 L176.978911,17.8912 C177.908699,17.8954667 178.625188,18.1173333 179.104444,18.5472 C179.642211,19.0346667 179.778913,19.6768 179.486891,20.4154667 C179.221466,21.1024 178.663486,21.6768 177.826784,22.1178667 C177.046996,22.5317333 176.19274,22.7237333 175.286888,22.7237333 L133.415579,22.7237333 C133.692175,23.3381333 134.105473,23.8970667 134.667708,24.3893333 C135.454411,25.0816 136.489518,25.6389333 137.7342,26.0448 C139.006541,26.4608 140.4725,26.7061333 142.104948,26.7061333 L173.550717,26.7061333 C174.935824,26.7029333 176.309229,26.5402667 177.637954,26.1936 C178.951253,25.856 180.201254,25.3749333 181.354978,24.7642667 C182.486894,24.1696 183.468809,23.4629333 184.281576,22.6746667 C185.073066,21.9045333 185.641151,21.0864 185.972535,20.2362667 C186.309769,19.3701333 186.378386,18.5904 186.19062,17.8517333 C185.996471,17.1013333 185.574662,16.4282667 184.933172,15.8458667 L184.933172,15.8458667 Z M247.740135,8.29173333 C246.658751,7.29973333 245.215665,6.50826667 243.452898,5.93813333 C241.676301,5.36586667 239.613533,5.07306667 237.331085,5.07306667 L212.090108,5.07306667 C209.798617,5.07306667 207.515104,5.36586667 205.299677,5.93813333 C203.087973,6.51893333 201.014035,7.31253333 199.118821,8.30453333 C197.242756,9.29333333 195.596478,10.4656 194.232647,11.7898667 C193.203391,12.7893333 192.462433,13.8634667 191.884773,14.976 L198.275204,14.976 C198.639566,14.3194667 199.079991,13.688 199.678928,13.1013333 C200.510312,12.2906667 201.506589,11.5776 202.649143,10.9685333 C203.770421,10.3722667 205.011379,9.90186667 206.329997,9.55733333 C207.651807,9.2176 209.008722,9.04853333 210.352872,9.04853333 L235.597573,9.04853333 C236.952893,9.04853333 238.180553,9.2192 239.252363,9.56213333 C240.318853,9.90826667 241.207683,10.3962667 241.883748,11.0032 C242.582153,11.632 243.037472,12.3749333 243.245451,13.2122667 C243.388536,13.7685333 243.358217,14.3626667 243.247579,14.976 L249.692264,14.976 C250.00769,13.8229333 250.116201,12.7130667 249.848116,11.6949333 C249.514605,10.4197333 248.803434,9.26933333 247.740135,8.29173333 L247.740135,8.29173333 Z M241.159279,18.6757333 C240.327896,19.4810667 239.332682,20.2037333 238.195979,20.8037333 C237.072042,21.3957333 235.836403,21.8746667 234.511934,22.2144 C233.193316,22.56 231.840123,22.7237333 230.484271,22.7237333 L205.240634,22.7237333 C203.878931,22.7237333 202.652867,22.5525333 201.589568,22.2128 C200.515631,21.8656 199.632651,21.3808 198.956055,20.7712 C198.26031,20.1456 197.806054,19.4016 197.592756,18.5626667 C197.437437,17.9386667 197.490629,17.2714667 197.650203,16.5845333 L191.199666,16.5845333 C190.823602,17.8133333 190.706581,18.992 190.994347,20.0805333 C191.327326,21.3589333 192.045412,22.5024 193.127859,23.4848 C194.228392,24.4730667 195.668819,25.264 197.417224,25.8368 C199.1768,26.4128 201.226802,26.7061333 203.511378,26.7061333 L228.755546,26.7061333 C231.048633,26.7061333 233.337997,26.4128 235.569381,25.8368 C237.806617,25.256 239.885874,24.4538667 241.749705,23.4501333 C243.61726,22.4506667 245.251304,21.2768 246.611943,19.9658667 C247.707688,18.9072 248.490136,17.7653333 249.072051,16.5845333 L242.683748,16.5845333 C242.311408,17.3146667 241.830024,18.0234667 241.159279,18.6757333 L241.159279,18.6757333 Z M84.3102224,18.9456 L84.7224567,17.8778667 L121.3294,17.8912 C122.259188,17.8954667 122.975146,18.1173333 123.454933,18.5472 C123.993232,19.0346667 124.128338,19.6768 123.836317,20.4154667 C123.570359,21.1024 123.013976,21.6768 122.176209,22.1178667 C121.395357,22.5317333 120.542165,22.7237333 119.635781,22.7237333 L88.1894807,22.7237333 C86.7719264,22.7237333 85.6671383,22.3514667 84.9102228,21.6709333 C84.104903,20.9408 83.8985199,19.9973333 84.3102224,18.9456 L84.3102224,18.9456 Z M77.5070256,22.0016 C77.7384088,22.9066667 78.2410687,23.7088 79.0171332,24.3893333 C79.8038359,25.0816 80.8384112,25.6389333 82.0841568,26.0448 C83.3559663,26.4608 84.821393,26.7061333 86.4549049,26.7061333 L117.900674,26.7061333 C119.286313,26.7029333 120.658123,26.5402667 121.987911,26.1936 C123.30121,25.856 124.550147,25.3749333 125.704935,24.7642667 C126.836851,24.1696 127.819298,23.4629333 128.631001,22.6746667 C129.422491,21.9045333 129.992172,21.0864 130.322492,20.2362667 C130.659726,19.3701333 130.729407,18.5904 130.541109,17.8517333 C130.346428,17.1013333 129.923555,16.4282667 129.282597,15.8458667 C128.619299,15.2544 127.763979,14.7765333 126.727276,14.4405333 C125.679403,14.0997333 124.454402,13.9050667 123.071954,13.9013333 L86.2692664,13.9013333 L86.7772455,12.6026667 C87.1682033,11.5861333 88.0283103,10.7205333 89.3320347,10.0314667 C90.5783123,9.36746667 91.9118239,9.04373333 93.3171442,9.04853333 C93.3171442,9.04853333 122.858124,9.04373333 126.076744,9.04853333 C129.290576,9.05066667 133.698558,5.07301729 133.698558,5.07301729 L95.0096987,5.07306667 C93.3740591,5.06933333 91.7772494,5.27733333 90.1799077,5.6832 C88.588949,6.0976 87.0958628,6.65973333 85.7458618,7.36213333 C84.4139458,8.0576 83.2469237,8.888 82.2783059,9.82666667 C81.329369,10.7434667 80.6421344,11.7349333 80.2330916,12.7738667 L77.7655365,19.1194667 C77.3612808,20.1568 77.2777701,21.0965333 77.5070256,22.0016 L77.5070256,22.0016 Z M1.3612224,31.2330667 C0.484094068,31.6176 0.54951965,31.9317333 1.50590336,31.9328 L70.7841481,32 C72.1692556,32 72.2697876,31.5066667 70.8596801,31.304 C70.8596801,31.304 58.4240322,29.1242667 42.5468924,26.4741333 C37.5245481,25.6346667 37.6351865,25.6634667 41.8000833,22.5386667 C56.4117966,11.5712 68.040529,2.48426667 68.040529,2.48426667 C68.479891,2.1952 68.3240398,1.92853333 67.827231,2.1248 L1.3612224,31.2330667 Z M66.9910601,0.719466667 L0.567072855,29.808 C-0.0334595218,30.064 -0.231332014,29.8165333 0.340476936,29.4528 C0.340476936,29.4528 16.1117657,18.9893333 31.0367771,8.60693333 C37.0421009,4.43306667 37.4548672,4.62293333 31.2053943,3.928 C14.621339,2.0848 3.96867122,0.484266667 3.96867122,0.484266667 C3.2346281,0.354133333 3.26016003,0 4.07824577,0 L66.8458472,0.0208 C67.8022309,0.0208 67.8671246,0.336 66.9910601,0.719466667 Z M76.890385,4.90701393 C77.399165,4.39269099 77.6536083,3.77049347 77.6536083,3.04042139 C77.6536083,2.31599886 77.399165,1.69795857 76.890385,1.18630052 C76.378727,0.671977577 75.7606867,0.41476281 75.0362642,0.41476281 C74.3145065,0.41476281 73.697852,0.671977577 73.1863005,1.18630052 C72.6775205,1.69795857 72.4230773,2.31599886 72.4230773,3.04042139 C72.4230773,3.77049347 72.6761348,4.39269099 73.1821433,4.90701393 C73.6909233,5.42133687 74.3089636,5.67844504 75.0362642,5.67844504 C75.7635648,5.67844504 76.3816051,5.42133687 76.890385,4.90701393 Z M77.1932227,0.887620128 C77.7877054,1.47943794 78.085,2.19565262 78.085,3.03626417 C78.085,3.87975379 77.7877054,4.60001909 77.1932227,5.19737987 C76.5986334,5.79463405 75.8796472,6.09331444 75.0362642,6.09331444 C74.1927745,6.09331444 73.4751741,5.79463405 72.8834629,5.19737987 C72.2945232,4.60279058 72,3.88252527 72,3.03626417 C72,2.1984241 72.2971881,1.48220942 72.8917773,0.887620128 C73.4834886,0.295908908 74.1984241,0 75.0362642,0 C75.8796472,0 76.5986334,0.295908908 77.1932227,0.887620128 Z M75.4915332,2.89523842 C75.7216728,2.80399273 75.8367958,2.6298158 75.8367958,2.37260103 C75.8367958,2.12924367 75.7626054,1.96615267 75.6142246,1.88311483 C75.4658437,1.80018359 75.2280293,1.75871796 74.9007814,1.75871796 L74.3974378,1.75871796 L74.3974378,2.96996181 L74.9299885,2.96996181 C75.1795284,2.96996181 75.36671,2.94501848 75.4915332,2.89523842 Z M76.3635904,4.48414986 C76.3691334,4.57251747 76.378727,4.63050539 76.392691,4.6582202 L76.4133705,4.69968582 L75.8617392,4.69968582 C75.8589677,4.68859989 75.8560896,4.67762057 75.8534247,4.66653464 C75.8506532,4.65555531 75.8478818,4.64308365 75.8451103,4.62933284 L75.8326386,4.52188465 L75.8326386,4.2572082 C75.8326386,3.87133275 75.7275355,3.61635649 75.5174359,3.49227941 C75.3930391,3.42054068 75.1745184,3.38472462 74.8620872,3.38472462 L74.3974378,3.38472462 L74.3974378,4.69968582 L73.808498,4.69968582 L73.808498,1.35632022 L74.9781697,1.35632022 C75.3930391,1.35632022 75.6971558,1.3965067 75.8907331,1.47677306 C76.2364221,1.62067689 76.4092133,1.90304817 76.4092133,2.32378033 C76.4092133,2.62267391 76.3004859,2.84279347 76.0830313,2.98392581 C75.9673752,3.0587558 75.8064161,3.11269309 75.5999408,3.14595086 C75.8613128,3.18741648 76.052545,3.29646361 76.1736374,3.47330542 C76.2947298,3.65004064 76.355276,3.82261864 76.355276,3.99103941 L76.355276,4.23556933 C76.355276,4.31295761 76.3580475,4.39578225 76.3635904,4.48414986 Z" fill="#FFFFFF"></path>
            </g>
        </svg>
    )
}

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center ">
                    <Branding />
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-100">Kawazaki </h2>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </>
    )
}

