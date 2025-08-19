// URLs d'images gratuites de personnes africaines
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
    },
    team: {
        cameroon: [
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1494790108755-2616b612b002?w=200&h=200&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face"
        ]
    }
};

// Hook pour obtenir une photo aléatoire
export function useAfricanPhoto(category = 'business', gender = 'mixed') {
    const photos = africanPhotos[category]?.[gender] || africanPhotos.business.male;
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    return randomPhoto;
}

// Fonction pour obtenir une photo consistante basée sur un nom
export function getConsistentPhoto(name, category = 'business', gender = 'mixed') {
    const photos = africanPhotos[category]?.[gender] || africanPhotos.business.male;
    if (!name) return photos[0];
    
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = hash % photos.length;
    return photos[index];
}
