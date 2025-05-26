import { useUserProfile } from '@/stores/user/userProfile';

const userProfile = useUserProfile();

export const getCategory = () => {
    const CategoriesList = async() => {
        let result = await  userProfile.getCategories();
        console.log(result);
        return result;
    };

    const getProfessions = async(category: number) => {
        userProfile.category = category;
        let result = await  userProfile.getProfessions();
        console.log(result);
        return result;
    };

    return {
        CategoriesList,
        getProfessions
    }
};