import React, { useState, useEffect } from 'react';
import { Play, Star, TrendingUp, Clock, Search, Menu, Bell, User, Flame, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trendingAnime = [
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=60",
      rating: "4.9",
      episode: "Episode 24"
    },
    {
      title: "Attack on Titan",
      image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=60",
      rating: "4.8",
      episode: "Final Season"
    },
    {
      title: "One Piece",
      image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop&q=60",
      rating: "4.7",
      episode: "Episode 1097"
    },
    {
      title: "Jujutsu Kaisen",
      image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=800&auto=format&fit=crop&q=60",
      rating: "4.9",
      episode: "Season 2"
    },
    {
      title: "Chainsaw Man",
      image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&auto=format&fit=crop&q=60",
      rating: "4.8",
      episode: "Episode 12"
    },
    {
      title: "My Hero Academia",
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&auto=format&fit=crop&q=60",
      rating: "4.7",
      episode: "Season 6"
    },
    {
      title: "Black Clover",
      image: "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=800&auto=format&fit=crop&q=60",
      rating: "4.6",
      episode: "Episode 170"
    },
    {
      title: "Tokyo Revengers",
      image: "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?w=800&auto=format&fit=crop&q=60",
      rating: "4.7",
      episode: "Season 2"
    },
    {
      title: "Spy x Family",
      image: "https://images.unsplash.com/photo-1615653051904-56f04e1a3c47?w=800&auto=format&fit=crop&q=60",
      rating: "4.8",
      episode: "Part 2"
    },
    {
      title: "Dragon Ball Super",
      image: "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?w=800&auto=format&fit=crop&q=60",
      rating: "4.9",
      episode: "Episode 131"
    }
  ];

  const popularAnime = [
    {
      title: "Naruto Shippuden",
      image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=800&auto=format&fit=crop&q=60",
      rating: "4.9",
      episode: "Complete Series"
    },
    {
      title: "Death Note",
      image: "https://images.unsplash.com/photo-1612344441107-ef12287e4872?w=800&auto=format&fit=crop&q=60",
      rating: "4.8",
      episode: "Complete Series"
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      image: "https://images.unsplash.com/photo-1615474634824-f45fb12b24a8?w=800&auto=format&fit=crop&q=60",
      rating: "4.9",
      episode: "Complete Series"
    },
    {
      title: "Hunter x Hunter",
      image: "https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?w=800&auto=format&fit=crop&q=60",
      rating: "4.8",
      episode: "Complete Series"
    },
    {
      title: "Steins;Gate",
      image: "https://images.unsplash.com/photo-1616567214738-22fc0c6332b3?w=800&auto=format&fit=crop&q=60",
      rating: "4.9",
      episode: "Complete Series"
    },
    {
      title: "Code Geass",
      image: "https://images.unsplash.com/photo-1614583224808-fac260dd6e2b?w=800&auto=format&fit=crop&q=60",
      rating: "4.8",
      episode: "Complete Series"
    },
    {
      title: "One Punch Man",
      image: "https://images.unsplash.com/photo-1614583224387-4c4d33b30b0e?w=800&auto=format&fit=crop&q=60",
      rating: "4.7",
      episode: "Season 2"
    },
    {
      title: "Tokyo Ghoul",
      image: "https://images.unsplash.com/photo-1614583224387-4c4d33b30b0e?w=800&auto=format&fit=crop&q=60",
      rating: "4.7",
      episode: "Complete Series"
    },
    {
      title: "Sword Art Online",
      image: "https://images.unsplash.com/photo-1614583224387-4c4d33b30b0e?w=800&auto=format&fit=crop&q=60",
      rating: "4.6",
      episode: "Complete Series"
    },
    {
      title: "Attack on Titan",
      image: "https://images.unsplash.com/photo-1614583224387-4c4d33b30b0e?w=800&auto=format&fit=crop&q=60",
      rating: "4.9",
      episode: "Final Season"
    }
  ];

  const webSeries = [
    {
      title: "Cyberpunk: Edgerunners",
      image: "https://images.unsplash.com/photo-1614583224387-4c4d33b30b0e?w=800&auto=format&fit=crop&q=60",
      rating: "4.8",
      episodes: "10 Episodes"
    },
    {
      title: "Castlevania",
      image: "https://images.unsplash.com/photo-1614583224387-4c4d33b30b0e?w=800&auto=format&fit=crop&q=60",
      rating: "4.7",
      episodes: "4 Seasons"
    },
    {
      title: "DOTA: Dragon's Blood",
      image: "https://images.unsplash.com/photo-1614583224387-4c4d33b30b0e?w=800&auto=format&fit=crop&q=60",
      rating: "4.6",
      episodes: "3 Seasons"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-2 ml-4">
                <Play className="h-8 w-8 text-red-500 animate-pulse" />
                <span className="text-xl font-bold">AnimeStream</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-red-500 transition-colors">Home</a>
              <a href="#" className="hover:text-red-500 transition-colors">Movies</a>
              <a href="#" className="hover:text-red-500 transition-colors">TV Series</a>
              <a href="#" className="hover:text-red-500 transition-colors">My List</a>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search anime..."
                  className="bg-gray-700 rounded-full pl-10 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-red-500 w-40 md:w-64 transition-all"
                />
              </div>
              <Bell className="h-6 w-6 cursor-pointer hover:text-red-500 transition-colors" />
              <User className="h-6 w-6 cursor-pointer hover:text-red-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 pb-4 px-4">
            <a href="#" className="block py-2 hover:text-red-500 transition-colors">Home</a>
            <a href="#" className="block py-2 hover:text-red-500 transition-colors">Movies</a>
            <a href="#" className="block py-2 hover:text-red-500 transition-colors">TV Series</a>
            <a href="#" className="block py-2 hover:text-red-500 transition-colors">My List</a>
          </div>
        )}
      </nav>

      {/* Hero Section with Parallax */}
      <div className="pt-16">
        <div 
          className="relative h-[80vh] overflow-hidden"
          style={{
            perspective: '1000px'
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10"
            style={{
              transform: `translateZ(${scrollY * 0.1}px)`
            }}
          ></div>
          <img
            src="https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&auto=format&fit=crop&q=60"
            alt="Hero"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 p-8 z-20"
            style={{
              transform: `translateZ(${scrollY * 0.2}px)`
            }}
          >
            <h1 className="text-6xl font-bold mb-4 animate-fade-in">Latest Releases</h1>
            <p className="text-gray-300 mb-6 max-w-xl text-lg">
              Watch the latest and most popular anime series in HD quality. New episodes added daily!
            </p>
            <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all shadow-lg hover:shadow-red-500/50">
              <Play className="h-5 w-5" />
              Watch Now
            </button>
          </div>
        </div>
      </div>

      {/* Web Series Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Award className="h-8 w-8 text-red-500" />
          <h2 className="text-3xl font-bold">Featured Web Series</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webSeries.map((series, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 500) * 0.1)}px)`
              }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={series.image}
                  alt={series.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{series.title}</h3>
                  <p className="text-gray-300">{series.episodes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="h-8 w-8 text-red-500" />
          <h2 className="text-3xl font-bold">Trending Now</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingAnime.map((anime, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 800) * 0.1)}px)`
              }}
            >
              <div className="relative">
                <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{anime.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-1">{anime.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {anime.episode}
                  </span>
                  <button className="text-red-500 hover:text-red-400 transition-colors">Watch Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Flame className="h-8 w-8 text-red-500" />
          <h2 className="text-3xl font-bold">Popular Anime</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {popularAnime.map((anime, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 1200) * 0.1)}px)`
              }}
            >
              <div className="relative">
                <img src={anime.image} alt={anime.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{anime.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-1">{anime.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {anime.episode}
                  </span>
                  <button className="text-red-500 hover:text-red-400 transition-colors">Watch Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Play className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold">AnimeStream</span>
          </div>
          <div className="text-center text-gray-400">
            <p>© 2024 AnimeStream. All rights reserved.</p>
            <p className="mt-2">Environment: {import.meta.env.MODE} | Version: {import.meta.env.VITE_APP_VERSION}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;