import React from 'react';

// Composant pour afficher des avatars avec des images de personnes africaines
export default function AfricanAvatar({ 
    gender = 'mixed', 
    profession = 'business', 
    size = 'md', 
    name = '', 
    className = '' 
}) {
    
    // Collection d'avatars diversifiés d'origine africaine
    const avatars = {
        male: {
            business: [
                "👨🏿‍💼", "👨🏾‍💼", "👨🏽‍💼"
            ],
            engineer: [
                "👨🏿‍💻", "👨🏾‍💻", "👨🏽‍💻", "👨🏿‍🔧", "👨🏾‍🔧"
            ],
            farmer: [
                "👨🏿‍🌾", "👨🏾‍🌾", "👨🏽‍🌾"
            ],
            doctor: [
                "👨🏿‍⚕️", "👨🏾‍⚕️", "👨🏽‍⚕️"
            ],
            teacher: [
                "👨🏿‍🏫", "👨🏾‍🏫", "👨🏽‍🏫"
            ],
            worker: [
                "👨🏿‍🏭", "👨🏾‍🏭", "👨🏽‍🏭", "👨🏿‍🔧", "👨🏾‍🔧"
            ]
        },
        female: {
            business: [
                "👩🏿‍💼", "👩🏾‍💼", "👩🏽‍💼"
            ],
            engineer: [
                "👩🏿‍💻", "👩🏾‍💻", "👩🏽‍💻", "👩🏿‍🔧", "👩🏾‍🔧"
            ],
            farmer: [
                "👩🏿‍🌾", "👩🏾‍🌾", "👩🏽‍🌾"
            ],
            doctor: [
                "👩🏿‍⚕️", "👩🏾‍⚕️", "👩🏽‍⚕️"
            ],
            teacher: [
                "👩🏿‍🏫", "👩🏾‍🏫", "👩🏽‍🏫"
            ],
            worker: [
                "👩🏿‍🏭", "👩🏾‍🏭", "👩🏽‍🏭", "👩🏿‍🔧", "👩🏾‍🔧"
            ]
        }
    };

    // Tailles disponibles
    const sizes = {
        xs: "text-lg",
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-3xl",
        xl: "text-4xl",
        "2xl": "text-5xl"
    };

    // Fonction pour sélectionner un avatar aléatoire
    const getRandomAvatar = () => {
        if (gender === 'mixed') {
            const genders = ['male', 'female'];
            const selectedGender = genders[Math.floor(Math.random() * genders.length)];
            const professionAvatars = avatars[selectedGender][profession] || avatars[selectedGender]['business'];
            return professionAvatars[Math.floor(Math.random() * professionAvatars.length)];
        } else {
            const professionAvatars = avatars[gender][profession] || avatars[gender]['business'];
            return professionAvatars[Math.floor(Math.random() * professionAvatars.length)];
        }
    };

    // Fonction pour obtenir un avatar basé sur le nom (pour la cohérence)
    const getConsistentAvatar = () => {
        if (!name) return getRandomAvatar();
        
        // Générer un index basé sur le nom pour la cohérence
        const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        
        const selectedGender = gender === 'mixed' 
            ? (hash % 2 === 0 ? 'male' : 'female')
            : gender;
            
        const professionAvatars = avatars[selectedGender][profession] || avatars[selectedGender]['business'];
        const index = hash % professionAvatars.length;
        
        return professionAvatars[index];
    };

    const avatar = name ? getConsistentAvatar() : getRandomAvatar();

    return (
        <div className={`inline-flex items-center justify-center ${className}`}>
            <span className={`${sizes[size]} transition-transform duration-300 hover:scale-110`}>
                {avatar}
            </span>
        </div>
    );
}

// Composant d'image avec fallback pour les vraies photos
export function AfricanPhoto({ 
    src, 
    alt = "Photo", 
    size = "md", 
    shape = "rounded", 
    fallback = null,
    className = "" 
}) {
    
    const [imageError, setImageError] = React.useState(false);
    
    const sizeClasses = {
        xs: "w-8 h-8",
        sm: "w-12 h-12", 
        md: "w-16 h-16",
        lg: "w-20 h-20",
        xl: "w-24 h-24",
        "2xl": "w-32 h-32"
    };
    
    const shapeClasses = {
        rounded: "rounded-lg",
        circle: "rounded-full",
        square: "rounded-none"
    };
    
    const handleImageError = () => {
        setImageError(true);
    };
    
    if (imageError || !src) {
        return fallback || <AfricanAvatar size={size} className={className} />;
    }
    
    return (
        <div className={`${sizeClasses[size]} ${shapeClasses[shape]} overflow-hidden bg-gray-100 ${className}`}>
            <img 
                src={src}
                alt={alt}
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
        </div>
    );
}

// URLs d'images gratuites de personnes africaines (placeholder service)
export const africanPhotos = {
    business: {
        male: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        ],
        female: [
            "https://images.unsplash.com/photo-1494790108755-2616b612b002?w=150&h=150&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
        ]
    },
    professional: {
        mixed: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=200&fit=crop",
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop"
        ]
    }
};

// Hook pour obtenir une photo aléatoire
export function useAfricanPhoto(category = 'business', gender = 'mixed') {
    const photos = africanPhotos[category]?.[gender] || africanPhotos.business.male;
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    return randomPhoto;
}
