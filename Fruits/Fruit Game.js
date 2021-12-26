        const fruits = {
            A : ["Apple", "Apricot", "Avocado", "Abiu", "Acai", "Acerola", "Ackee", "Arhat", "American Mayapple", "African Cherry Orange",
            "Amazon grape", "Araza", "Alligator apple", "Ambarella", "African Cucumber", "African Medlar", "African Moringa", "Agave Plant", "Aizen Fruit", "American Black Elderberry", "American Chestnut", "American Hazelnut Shrub", "American Red Raspberry", "Aprium", "Atemoya", "Atherton Raspberry"],

            B : ["Banana", "Berry", "Bayberry"," Blueberry", "Blackberry"," Boysenberry", "Bearberry", "Bilberry", "Barberry",
            "Buffaloberry", "Black cherry"," Beach plum", "Black raspberry", "Black apple", "Blue tongue", "Bolwarra", "Burdekin plum",
            "Bramble", "Broadleaf Bramble", "Black mulberry", "Blood orange", "Babaco"," Bael", "Barbadine", "Barbados cherry", "Betel nut"," Bilimbi"," Bitter gourd", "Black sapote", "Bottle gourd", "Brazil nut"," Breadfruit", "Burmese grape", "Blackcurrant",
            "Bignay", "Beechnut", "Bacuri Fruit", "Balsam Apple", "Batuan Fruit", "Blood Lime", "Brazilian Guava", "Brush cherry"],

            C : ["Cucumber", "Cantaloupe", "Chokeberry", "Cranberry"," Cloudberry", "Crowberry", "Conkerberry", "Calabash"," Calamansi",
            "Calamondins", "Canistel", "Cape Gooseberry", "Capuli Cherry", "Carob Fruit", "Cashew Apple", "Cedar Bay Cherry",
            "Cempedak", "Ceylon Gooseberry", "Charichuelo Fruit", "Chayote Fruit", "Cherimoya Fruit", "cherry Fruit", "Chokecherry",
            "Citrofortunella", "Clementines", "Cluster Fig", "Coco Plum", "Common Apple Berry", "Cornelian Cherry", "Cucumber",
           " Cupuacu"],

            D : ["Damson", "Date plum", "Davidson's plum, Dead Man's Fingers", "Dekopon", "Desert fig", "Desert lime", "Dodder laurel", "Double Coconut", "Dragon Fruit", "Duku fruit", "Durian"],

            E : ["Eastern Hawthorn", "Elephant apple", "Emu Apple", "Emu berry"],

            F : ["Fairchild tangerine", "False mastic", "Feijoa", "Fibrous Satinash"," Finger Lime", "Florida strangler fig", "Forest strawberries"],

            G : ["Gac Fruit", "Galia melon", "Gambooge", "Genip"," Giant Granadilla", "Golden apple", "Goumi Fruit", "Governors Plum",
           " Granadilla", "Grapefruit", "Grapes"," Grapple", "Greengage", "Ground Plum", "Grumichama", "Guanabana", "Guarana", "Guavaberry"],

            H : ["Hackberry", "Hardy-kiwi"," Hawthorn", "Honeydew"," Honeysuckle", "Horned melon", "Huckleberry", "Huito"],

            I : ["Ice Cream Bean", "Ilama"," Illawarra Plum", "Imbe fruit", "Indian almond", "Indian Fig", "Indian Gooseberry", "Indian jujube", "Indian Prune"],

            J : ["Jabotacaba", "Jackfruit", "Jambul fruit", "Japanese Persimmon", "Jatoba fruit", "Jelly Palm", "Jocote", "Jostaberry",
            "Jujube", "Junglesop", "Juniper berry"],

            K : ["Kabosu Fruit", "Kaffir lime", "Kahikatea"," Kakadu plum", "Kapok", "Karkalla", "Karonda", "Kei apple"," Kepel", "Keule",
            "Kiwi", "Korlan", "Kumquat", "Kundong", "Kutjera", "Kwai Muk"],

            L : ["Lablab", "Lady apple", "Lakoocha", "Langsat", "Lapsi", "Lardizabala", "Lemato", "Lemon aspen"," Lemons", "Leucaena",
            "Lillypilly"," Limeberry", "Limequat", "Lingonberry", "Loganberry", "Loquat", "Lucuma", "Lychee"],

            M : ["Macadamia", "Madrono", "Malay Apple", "Mamey Sapote", "Mammee Apple", "Mamoncillo", "Mandarin", "Mangaba"," Mangosteen",
           " Manila Tamarind"," Manoao", "Ma-praang"," Maqui", "Marang", "Marionberry", "Marula", "Mayan Nut", "Mayapple"," Maypop",
            "Melinjo", "MelonPear"," Midyim"," Miracle fruit", "Mock Strawberry", "Monstera Delicisiosa", "Mora de Castilla", "Morinda",
           " Mountain pepper", "Mountain Soursop", "Muscadine"],

            N : ["Naartjie", "Nageia", "Nance", "Naranjilla", "Nectacotum"," Nectarines", "Neem", "Nere", "Nonda plum", "Nungu", "Nutmeg"],

            O : ["Oil Palm", "Olallieberry", "Olive", "Orangelo", "Oranges"," Oregon grape", "Oroblanco", "Ortanique", "Otaheite gooseberry"],

            P : ["Papaya", "Passion Fruit", "Peach", "Peach palm", "Peanut"," Pears", "Pecan", "Pequi", "Persian lime"," Persimmon", "Peumo",
           " Phalsa"," Physalis Fruit", "Pigeon pea", "Pigeon plum", "Pigface", "Pili Nut", "Pine apple"," Pineberry", "Pink-flowered Native Raspberry", "Plum"," Plumcot", "Pluot", "Pomato", "Pomegranate", "Pulasan", "Pummelo"],

            Q : ["Quince"],

            R : ["Rambutan", "Rangpur"," Red Mombin", "Riberry", "Rollinia"," Rose Apple"],

            S : ["Safou", "Salak", "Santol", "Sapodilla", "Soncoya", "Star Apple", "Star Fruit", "Strawberry guava", "Sugar Apple", "Sweet Orange", "Sweet Pepper"],

            T : ["Tamarind", "Tangelo", "Tangor", "Tayberry", "Tomato"],

            U : ["Ugli"],

            V : ["Vanilla", "Velvet apple"],

            W : ["Walnut"," Watermelon"," Wax jambu", "White sapote"],

            X : ["xigua - watermelon"],

            Y : ["Youngberry", "Yuzu"],

            Z : ["Zucchini"]

        }
        const body = document.querySelector('body');
        body.addEventListener('keydown', (event) => {
            const h1 = document.querySelector('h1');
            fruit = randomFruit(event.key);
            if(fruit === null)
            h1.innerHTML = `<span class="error">Sorry, I didn't found any match</span>`;
            else
            h1.innerHTML = `Hey, Here is your fruit <br><span> ${fruit} </span>`;
        })

       function randomFruit(key){
            switch(key.toUpperCase()) {
                  case 'A': return fruits.A[Math.floor(Math.random() *fruits.A.length)];
                  case 'B': return fruits.B[Math.floor(Math.random() *fruits.B.length)];
                  case 'C': return fruits.C[Math.floor(Math.random() *fruits.C.length)];
                  case 'D': return fruits.D[Math.floor(Math.random() *fruits.D.length)];
                  case 'E': return fruits.E[Math.floor(Math.random() *fruits.E.length)];
                  case 'F': return fruits.F[Math.floor(Math.random() *fruits.F.length)];
                  case 'G': return fruits.G[Math.floor(Math.random() *fruits.G.length)];
                  case 'H': return fruits.H[Math.floor(Math.random() *fruits.H.length)];
                  case 'I': return fruits.I[Math.floor(Math.random() *fruits.I.length)];
                  case 'J': return fruits.J[Math.floor(Math.random() *fruits.J.length)];
                  case 'K': return fruits.K[Math.floor(Math.random() *fruits.K.length)];
                  case 'L': return fruits.L[Math.floor(Math.random() *fruits.L.length)];
                  case 'M': return fruits.M[Math.floor(Math.random() *fruits.M.length)];
                  case 'N': return fruits.N[Math.floor(Math.random() *fruits.N.length)];
                  case 'O': return fruits.O[Math.floor(Math.random() *fruits.O.length)];
                  case 'P': return fruits.P[Math.floor(Math.random() *fruits.P.length)];
                  case 'Q': return fruits.Q[Math.floor(Math.random() *fruits.Q.length)];
                  case 'R': return fruits.R[Math.floor(Math.random() *fruits.R.length)];
                  case 'S': return fruits.S[Math.floor(Math.random() *fruits.S.length)];
                  case 'T': return fruits.T[Math.floor(Math.random() *fruits.T.length)];
                  case 'U': return fruits.U[Math.floor(Math.random() *fruits.U.length)];
                  case 'V': return fruits.V[Math.floor(Math.random() *fruits.V.length)];
                  case 'W': return fruits.W[Math.floor(Math.random() *fruits.W.length)];
                  case 'X': return fruits.X[Math.floor(Math.random() *fruits.X.length)];
                  case 'Y': return fruits.Y[Math.floor(Math.random() *fruits.Y.length)];
                  case 'Z': return fruits.Z[Math.floor(Math.random() *fruits.Z.length)];
                  default : return null;
            }
        }