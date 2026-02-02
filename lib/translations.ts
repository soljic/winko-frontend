export type Language = 'en' | 'hr' | 'de';

export const translations = {
    en: {
        nav: {
            liveRaffles: "Live Raffles",
            sellItem: "Sell Item",
            winners: "Winners",
            connectWallet: "Connect Wallet",
            howItWorks: "How it Works"
        },
        hero: {
            newDrop: "New Drop Live",
            title1: "Win the",
            title2: "Unattainable.",
            subtitle: "The premium marketplace for probability. Own luxury assets, cars, and tech for the price of a coffee. Provably fair.",
            startWinning: "Start Winning",
            howItWorks: "How it Works",
            wonThisMonth: "Won this month",
            activePlayers: "Active Players",
            buyNow: "Buy Now",
            ticket: "ticket"
        },
        home: {
            liveRaffles: "Live Raffles",
            dontMiss: "Don't miss your chance to win.",
            viewAll: "View All",
            noRaffles: "No Active Raffles",
            checkBack: "Check back later for new drops."
        },
        card: {
            funded: "Funded",
            ticketPrice: "Ticket Price",
            timeLeft: "Time Left"
        },
        howItWorks: {
            title: "How Winko Works",
            subtitle: "The ecosystem where everyone wins. Choose your path.",
            tabs: {
                buyer: "For Buyers",
                seller: "For Sellers",
                brand: "For Brands"
            },
            buyer: {
                title: "Win Premium Assets for Pennies",
                desc: "Access luxury items, cars, and tech with micro-tickets. Even if the target isn't met, the draw still happens!",
                steps: [
                    { title: "Browse & Discover", desc: "Explore verified listings from exclusive brand drops." },
                    { title: "Buy Micro-Tickets", desc: "Purchase tickets starting at €2.00. The more you buy, the higher your odds." },
                    { title: "The Draw (Always Happens)", desc: "If the target is met, you play for the Item. If not, you play for a massive Cash Pot (50/50 Split)." },
                    { title: "Claim Prize", desc: "Winners receive the item shipped globally or the cash prize directly to their wallet." }
                ]
            },
            seller: {
                title: "Liquidity Without Lowballs",
                desc: "Sell your high-value assets at your target price. No haggling, no time wasters.",
                steps: [
                    { title: "List Your Asset", desc: "Set your Target Price (e.g., €5,000 for a Rolex). We verify authenticity." },
                    { title: "Crowdfunding Phase", desc: "Users buy tickets to fund your target. You track progress in real-time." },
                    { title: "Target Met?", desc: "YES: You get 100% of your Target Price. NO: You keep the item AND get a cash consolation (10% of pot)." },
                    { title: "Zero Risk", desc: "You never lose. You either sell for your price or get paid to keep your item." }
                ]
            },
            brand: {
                title: "Engagement Over Impressions",
                desc: "Don't just show ads. Let users invest in your brand through high-value drops.",
                steps: [
                    { title: "Sponsor a Drop", desc: "Provide a hero product (e.g., Tesla, Tech Bundle) as the prize." },
                    { title: "Viral Engagement", desc: "Users buy tickets to win. This creates deep commitment and massive social hype." },
                    { title: "Lead Generation", desc: "Get access to a list of thousands of high-intent users who want your product." },
                    { title: "Revenue Share", desc: "Earn a percentage of ticket sales. Turn marketing spend into a revenue stream." }
                ]
            },
            cta: {
                title: "Ready to join the revolution?",
                browse: "Start Browsing",
                sell: "Become a Seller"
            }
        },
        sell: {
            title: "List Your Asset",
            subtitle: "Turn your luxury items into liquidity. Fair market value, guaranteed.",
            form: {
                title: "Item Title",
                titlePlaceholder: "e.g. Rolex Submariner Date",
                category: "Category",
                condition: "Condition",
                targetPrice: "Target Price (€)",
                description: "Description",
                uploadImages: "Upload Photos",
                submit: "Submit for Review",
                calculating: "Calculating fees...",
                estimatedTicket: "Estimated Ticket Price: "
            },
            categories: {
                watches: "Watches",
                cars: "Cars",
                tech: "Tech",
                fashion: "Fashion",
                realEstate: "Real Estate"
            }
        },
        dashboard: {
            nav: {
                overview: "Overview",
                createDrop: "Create Drop",
                settings: "Settings",
                logout: "Logout"
            },
            overview: {
                title: "Brand Dashboard",
                totalRevenue: "Total Revenue",
                activeDrops: "Active Drops",
                totalTickets: "Tickets Sold",
                engagement: "Engagement Rate",
                recentActivity: "Recent Activity"
            },
            createDrop: {
                title: "Launch New Drop",
                subtitle: "Create a high-impact campaign for your brand.",
                form: {
                    productName: "Product Name",
                    retailValue: "Retail Value (€)",
                    ticketPrice: "Ticket Price (€)",
                    totalTickets: "Total Tickets",
                    startDate: "Start Date",
                    endDate: "End Date",
                    description: "Campaign Description",
                    uploadAssets: "Upload Marketing Assets",
                    submit: "Launch Campaign"
                }
            },
            settings: {
                title: "Settings",
                subtitle: "Manage your brand profile and preferences.",
                tabs: {
                    profile: "Profile",
                    security: "Security",
                    notifications: "Notifications",
                    api: "API Keys"
                },
                profile: {
                    brandName: "Brand Name",
                    website: "Website",
                    bio: "Bio",
                    logo: "Logo",
                    save: "Save Changes"
                },
                security: {
                    currentPassword: "Current Password",
                    newPassword: "New Password",
                    confirmPassword: "Confirm Password",
                    update: "Update Password"
                }
            },
        },
        auth: {
            login: {
                title: "Welcome Back",
                subtitle: "Sign in to access your wallet and active raffles.",
                email: "Email Address",
                password: "Password",
                submit: "Sign In",
                noAccount: "Don't have an account?",
                register: "Register"
            },
            register: {
                title: "Create Account",
                subtitle: "Join the marketplace of probability.",
                username: "Username",
                email: "Email Address",
                password: "Password",
                brandName: "Brand Name",
                website: "Website (Optional)",
                role: "I want to...",
                roles: {
                    customer: "Buy & Sell (Personal)",
                    brand: "Launch Brand Drops (Business)"
                },
                submit: "Create Account",
                hasAccount: "Already have an account?",
                login: "Sign In"
            }
        },
        profile: {
            title: "My Profile",
            balance: "Wallet Balance",
            activeRaffles: "Active Raffles",
            history: "Game History",
            tabs: {
                active: "Active",
                history: "History",
                winnings: "Winnings"
            },
            empty: {
                active: "No active raffles. Start winning!",
                history: "No game history yet.",
                winnings: "No winnings yet. Your time is coming!"
            }
        },
        notifications: {
            title: "Notifications",
            empty: "No new notifications",
            types: {
                win: "You Won!",
                loss: "Better luck next time",
                draw: "Raffle Drawn",
                info: "Info"
            }
        }
    },
    hr: {
        nav: {
            liveRaffles: "Aktivne Igre",
            sellItem: "Prodaj Predmet",
            winners: "Dobitnici",
            connectWallet: "Spoji Novčanik",
            howItWorks: "Kako Funkcionira"
        },
        hero: {
            newDrop: "Novi Drop Uživo",
            title1: "Osvoji",
            title2: "Nedostižno.",
            subtitle: "Premium tržište vjerojatnosti. Posjeduj luksuzne predmete, aute i tehniku za cijenu kave. Dokazivo pošteno.",
            startWinning: "Započni Igru",
            howItWorks: "Kako Funkcionira",
            wonThisMonth: "Osvojeno ovaj mjesec",
            activePlayers: "Aktivnih Igrača",
            buyNow: "Kupi Odmah",
            ticket: "ulaznica"
        },
        home: {
            liveRaffles: "Aktivne Igre",
            dontMiss: "Ne propusti priliku za dobitak.",
            viewAll: "Pogledaj Sve",
            noRaffles: "Nema Aktivnih Igara",
            checkBack: "Provjeri kasnije za nove dropove."
        },
        card: {
            funded: "Prikupljeno",
            ticketPrice: "Cijena Ulaznice",
            timeLeft: "Preostalo"
        },
        howItWorks: {
            title: "Kako Tokko Funkcionira",
            subtitle: "Ekosustav gdje svi pobjeđuju. Odaberi svoj put.",
            tabs: {
                buyer: "Za Kupce",
                seller: "Za Prodavače",
                brand: "Za Brendove"
            },
            buyer: {
                title: "Osvoji Premium Imovinu za Sitniš",
                desc: "Pristup luksuznim predmetima, autima i tehnici putem mikro-ulaznica. Čak i ako se cilj ne ispuni, izvlačenje se održava!",
                steps: [
                    { title: "Istraži i Otkrij", desc: "Pregledaj verificirane oglase privatnih prodavača i ekskluzivne dropove brendova." },
                    { title: "Kupi Mikro-Ulaznice", desc: "Kupi ulaznice već od €2.00. Što više kupiš, veće su šanse." },
                    { title: "Izvlačenje (Uvijek se Održava)", desc: "Ako je cilj ispunjen, igraš za Predmet. Ako nije, igraš za masivni Novčani Pot (50/50 Podjela)." },
                    { title: "Preuzmi Nagradu", desc: "Pobjednici dobivaju predmet dostavljen globalno ili novčanu nagradu direktno u novčanik." }
                ]
            },
            seller: {
                title: "Likvidnost Bez Cjenkanja",
                desc: "Prodaj svoju vrijednu imovinu po ciljanoj cijeni. Bez pregovaranja, bez gubitka vremena.",
                steps: [
                    { title: "Objavi Predmet", desc: "Postavi Ciljanu Cijenu (npr. €5,000 za Rolex). Mi verificiramo autentičnost." },
                    { title: "Faza Financiranja", desc: "Korisnici kupuju ulaznice da ispune tvoj cilj. Pratiš napredak u stvarnom vremenu." },
                    { title: "Cilj Ispunjen?", desc: "DA: Dobivaš 100% Ciljane Cijene. NE: Zadržavaš predmet I dobivaš utješnu novčanu nagradu (10% pota)." },
                    { title: "Nula Rizika", desc: "Nikad ne gubiš. Ili prodaš po svojoj cijeni ili si plaćen da zadržiš predmet." }
                ]
            },
            brand: {
                title: "Angažman Iznad Impresija",
                desc: "Ne prikazuj samo oglase. Dopusti korisnicima da investiraju u tvoj brend kroz vrijedne dropove.",
                steps: [
                    { title: "Sponzoriraj Drop", desc: "Osiguraj glavni proizvod (npr. Tesla, Tech Paket) kao nagradu." },
                    { title: "Viralni Angažman", desc: "Korisnici kupuju ulaznice za pobjedu. To stvara duboku predanost i masivni društveni hype." },
                    { title: "Generiranje Leadova", desc: "Dobij pristup listi tisuća korisnika visoke namjere koji žele tvoj proizvod." },
                    { title: "Podjela Prihoda", desc: "Zaradi postotak od prodaje ulaznica. Pretvori marketinški trošak u izvor prihoda." }
                ]
            },
            cta: {
                title: "Spreman pridružiti se revoluciji?",
                browse: "Započni Istruživanje",
                sell: "Postani Prodavač"
            }
        },
        sell: {
            title: "Objavi Svoj Predmet",
            subtitle: "Pretvori luksuzne predmete u likvidnost. Fer tržišna vrijednost, zajamčeno.",
            form: {
                title: "Naslov Predmeta",
                titlePlaceholder: "npr. Rolex Submariner Date",
                category: "Kategorija",
                condition: "Stanje",
                targetPrice: "Ciljana Cijena (€)",
                description: "Opis",
                uploadImages: "Učitaj Fotografije",
                submit: "Pošalji na Pregled",
                calculating: "Računam naknade...",
                estimatedTicket: "Procijenjena Cijena Ulaznice: "
            },
            categories: {
                watches: "Satovi",
                cars: "Automobili",
                tech: "Tehnika",
                fashion: "Moda",
                realEstate: "Nekretnine"
            }
        },
        dashboard: {
            nav: {
                overview: "Pregled",
                createDrop: "Kreiraj Drop",
                settings: "Postavke",
                logout: "Odjava"
            },
            overview: {
                title: "Brand Dashboard",
                totalRevenue: "Ukupni Prihod",
                activeDrops: "Aktivni Dropovi",
                totalTickets: "Prodanih Ulaznica",
                engagement: "Stopa Angažmana",
                recentActivity: "Nedavna Aktivnost"
            },
            createDrop: {
                title: "Lansiraj Novi Drop",
                subtitle: "Kreiraj kampanju visokog utjecaja za svoj brend.",
                form: {
                    productName: "Naziv Proizvoda",
                    retailValue: "Maloprodajna Vrijednost (€)",
                    ticketPrice: "Cijena Ulaznice (€)",
                    totalTickets: "Ukupno Ulaznica",
                    startDate: "Datum Početka",
                    endDate: "Datum Završetka",
                    description: "Opis Kampanje",
                    uploadAssets: "Učitaj Marketinške Materijale",
                    submit: "Lansiraj Kampanju"
                }
            },
            settings: {
                title: "Postavke",
                subtitle: "Upravljajte profilom brenda i postavkama.",
                tabs: {
                    profile: "Profil",
                    security: "Sigurnost",
                    notifications: "Obavijesti",
                    api: "API Ključevi"
                },
                profile: {
                    brandName: "Ime Brenda",
                    website: "Web Stranica",
                    bio: "Biografija",
                    logo: "Logo",
                    save: "Spremi Promjene"
                },
                security: {
                    currentPassword: "Trenutna Lozinka",
                    newPassword: "Nova Lozinka",
                    confirmPassword: "Potvrdi Lozinku",
                    update: "Ažuriraj Lozinku"
                }
            }
        },
        auth: {
            login: {
                title: "Dobrodošli Natrag",
                subtitle: "Prijavite se za pristup novčaniku i aktivnim igrama.",
                email: "Email Adresa",
                password: "Lozinka",
                submit: "Prijavi Se",
                noAccount: "Nemate račun?",
                register: "Registracija"
            },
            register: {
                title: "Kreiraj Račun",
                subtitle: "Pridruži se tržištu vjerojatnosti.",
                username: "Korisničko Ime",
                email: "Email Adresa",
                password: "Lozinka",
                brandName: "Ime Brenda",
                website: "Web Stranica (Opcionalno)",
                role: "Želim...",
                roles: {
                    customer: "Kupovati i Prodavati (Privatno)",
                    brand: "Lansirati Brand Dropove (Poslovno)"
                },
                submit: "Kreiraj Račun",
                hasAccount: "Već imate račun?",
                login: "Prijavi Se"
            }
        },
        profile: {
            title: "Moj Profil",
            balance: "Stanje Novčanika",
            activeRaffles: "Aktivne Igre",
            history: "Povijest Igara",
            tabs: {
                active: "Aktivno",
                history: "Povijest",
                winnings: "Dobici"
            },
            empty: {
                active: "Nema aktivnih igara. Započni igru!",
                history: "Nema povijesti igara.",
                winnings: "Nema dobitaka još. Tvoje vrijeme dolazi!"
            }
        },
        notifications: {
            title: "Obavijesti",
            empty: "Nema novih obavijesti",
            types: {
                win: "Pobjeda!",
                loss: "Više sreće drugi put",
                draw: "Izvlačenje Završeno",
                info: "Info"
            }
        }
    },
    de: {
        nav: {
            liveRaffles: "Live Verlosungen",
            sellItem: "Artikel Verkaufen",
            winners: "Gewinner",
            connectWallet: "Wallet Verbinden",
            howItWorks: "Wie es funktioniert"
        },
        hero: {
            newDrop: "Neuer Drop Live",
            title1: "Gewinne das",
            title2: "Unerreichbare.",
            subtitle: "Der Premium-Marktplatz für Wahrscheinlichkeiten. Besitze Luxusgüter, Autos und Technik zum Preis eines Kaffees. Nachweislich fair.",
            startWinning: "Jetzt Gewinnen",
            howItWorks: "Wie es funktioniert",
            wonThisMonth: "Diesen Monat gewonnen",
            activePlayers: "Aktive Spieler",
            buyNow: "Jetzt Kaufen",
            ticket: "Ticket"
        },
        home: {
            liveRaffles: "Live Verlosungen",
            dontMiss: "Verpasse nicht deine Gewinnchance.",
            viewAll: "Alle Ansehen",
            noRaffles: "Keine Aktiven Verlosungen",
            checkBack: "Schau später wieder vorbei."
        },
        card: {
            funded: "Finanziert",
            ticketPrice: "Ticketpreis",
            timeLeft: "Verbleibend"
        },
        howItWorks: {
            title: "Wie Tokko Funktioniert",
            subtitle: "Das Ökosystem, in dem jeder gewinnt. Wähle deinen Weg.",
            tabs: {
                buyer: "Für Käufer",
                seller: "Für Verkäufer",
                brand: "Für Marken"
            },
            buyer: {
                title: "Gewinne Premium-Assets für Pennies",
                desc: "Zugang zu Luxusartikeln, Autos und Technik mit Mikro-Tickets. Auch wenn das Ziel nicht erreicht wird, findet die Ziehung statt!",
                steps: [
                    { title: "Stöbern & Entdecken", desc: "Entdecke verifizierte Angebote von privaten Verkäufern und exklusive Marken-Drops." },
                    { title: "Mikro-Tickets Kaufen", desc: "Kaufe Tickets ab 2,00 €. Je mehr du kaufst, desto höher deine Chancen." },
                    { title: "Die Ziehung (Findet Immer Statt)", desc: "Wenn das Ziel erreicht ist, spielst du um den Artikel. Wenn nicht, spielst du um einen riesigen Cash-Pot (50/50 Split)." },
                    { title: "Preis Beanspruchen", desc: "Gewinner erhalten den Artikel weltweit geliefert oder den Geldpreis direkt in ihre Wallet." }
                ]
            },
            seller: {
                title: "Liquidität Ohne Preisdrückerei",
                desc: "Verkaufe deine hochwertigen Assets zu deinem Zielpreis. Kein Feilschen, keine Zeitverschwendung.",
                steps: [
                    { title: "Artikel Listen", desc: "Setze deinen Zielpreis (z.B. 5.000 € für eine Rolex). Wir verifizieren die Echtheit." },
                    { title: "Crowdfunding-Phase", desc: "Nutzer kaufen Tickets, um dein Ziel zu finanzieren. Du verfolgst den Fortschritt in Echtzeit." },
                    { title: "Ziel Erreicht?", desc: "JA: Du erhältst 100% deines Zielpreises. NEIN: Du behältst den Artikel UND erhältst einen Trostpreis (10% des Pots)." },
                    { title: "Null Risiko", desc: "Du verlierst nie. Entweder verkaufst du zu deinem Preis oder wirst dafür bezahlt, deinen Artikel zu behalten." }
                ]
            },
            brand: {
                title: "Engagement Statt Impressionen",
                desc: "Schalte nicht nur Werbung. Lass Nutzer durch hochwertige Drops in deine Marke investieren.",
                steps: [
                    { title: "Einen Drop Sponsern", desc: "Stelle ein Hero-Produkt (z.B. Tesla, Tech-Bundle) als Preis zur Verfügung." },
                    { title: "Virales Engagement", desc: "Nutzer kaufen Tickets, um zu gewinnen. Das schafft tiefe Bindung und massiven sozialen Hype." },
                    { title: "Lead-Generierung", desc: "Erhalte Zugang zu einer Liste von Tausenden von Nutzern mit hoher Kaufabsicht." },
                    { title: "Umsatzbeteiligung", desc: "Verdiene einen Prozentsatz der Ticketverkäufe. Verwandle Marketingausgaben in eine Einnahmequelle." }
                ]
            },
            cta: {
                title: "Bereit, der Revolution beizutreten?",
                browse: "Jetzt Stöbern",
                sell: "Verkäufer Werden"
            }
        },
        sell: {
            title: "Artikel Listen",
            subtitle: "Verwandle deine Luxusgüter in Liquidität. Fairer Marktwert, garantiert.",
            form: {
                title: "Artikeltitel",
                titlePlaceholder: "z.B. Rolex Submariner Date",
                category: "Kategorie",
                condition: "Zustand",
                targetPrice: "Zielpreis (€)",
                description: "Beschreibung",
                uploadImages: "Fotos Hochladen",
                submit: "Zur Überprüfung Senden",
                calculating: "Gebühren werden berechnet...",
                estimatedTicket: "Geschätzter Ticketpreis: "
            },
            categories: {
                watches: "Uhren",
                cars: "Autos",
                tech: "Technik",
                fashion: "Mode",
                realEstate: "Immobilien"
            }
        },
        dashboard: {
            nav: {
                overview: "Übersicht",
                createDrop: "Drop Erstellen",
                settings: "Einstellungen",
                logout: "Abmelden"
            },
            overview: {
                title: "Marken-Dashboard",
                totalRevenue: "Gesamtumsatz",
                activeDrops: "Aktive Drops",
                totalTickets: "Verkaufte Tickets",
                engagement: "Engagement-Rate",
                recentActivity: "Letzte Aktivität"
            },
            createDrop: {
                title: "Neuen Drop Starten",
                subtitle: "Erstelle eine wirkungsvolle Kampagne für deine Marke.",
                form: {
                    productName: "Produktname",
                    retailValue: "Einzelhandelswert (€)",
                    ticketPrice: "Ticketpreis (€)",
                    totalTickets: "Gesamttickets",
                    startDate: "Startdatum",
                    endDate: "Enddatum",
                    description: "Kampagnenbeschreibung",
                    uploadAssets: "Marketing-Assets Hochladen",
                    submit: "Kampagne Starten"
                }
            },
            settings: {
                title: "Einstellungen",
                subtitle: "Verwalten Sie Ihr Markenprofil und Ihre Präferenzen.",
                tabs: {
                    profile: "Profil",
                    security: "Sicherheit",
                    notifications: "Benachrichtigungen",
                    api: "API-Schlüssel"
                },
                profile: {
                    brandName: "Markenname",
                    website: "Webseite",
                    bio: "Biografie",
                    logo: "Logo",
                    save: "Änderungen Speichern"
                },
                security: {
                    currentPassword: "Aktuelles Passwort",
                    newPassword: "Neues Passwort",
                    confirmPassword: "Passwort Bestätigen",
                    update: "Passwort Aktualisieren"
                }
            }
        },
        auth: {
            login: {
                title: "Willkommen Zurück",
                subtitle: "Melden Sie sich an, um auf Ihre Wallet zuzugreifen.",
                email: "E-Mail Adresse",
                password: "Passwort",
                submit: "Anmelden",
                noAccount: "Kein Konto?",
                register: "Registrieren"
            },
            register: {
                title: "Konto Erstellen",
                subtitle: "Treten Sie dem Marktplatz der Wahrscheinlichkeiten bei.",
                username: "Benutzername",
                email: "E-Mail Adresse",
                password: "Passwort",
                brandName: "Markenname",
                website: "Webseite (Optional)",
                role: "Ich möchte...",
                roles: {
                    customer: "Kaufen & Verkaufen (Privat)",
                    brand: "Marken-Drops Starten (Business)"
                },
                submit: "Konto Erstellen",
                hasAccount: "Bereits ein Konto?",
                login: "Anmelden"
            }
        },
        profile: {
            title: "Mein Profil",
            balance: "Wallet Guthaben",
            activeRaffles: "Aktive Verlosungen",
            history: "Spielhistorie",
            tabs: {
                active: "Aktiv",
                history: "Historie",
                winnings: "Gewinne"
            },
            empty: {
                active: "Keine aktiven Verlosungen. Fang an zu gewinnen!",
                history: "Noch keine Spielhistorie.",
                winnings: "Noch keine Gewinne. Deine Zeit kommt!"
            }
        },
        notifications: {
            title: "Benachrichtigungen",
            empty: "Keine neuen Benachrichtigungen",
            types: {
                win: "Gewonnen!",
                loss: "Viel Glück beim nächsten Mal",
                draw: "Verlosung Beendet",
                info: "Info"
            }
        }
    }
};
