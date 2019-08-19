import { AddCountryConst,DeleteCountryConst,GetCountryConst } from '../constants';



export function AddCountry(name) {
    const action={
        type: AddCountryConst,
        name
    }
    return action;
}

export const deleteCountry=(id)=>{
    return{
        type: DeleteCountryConst,
        id,
    }
}

export function GetCountry(data,isClickedCountry) {
    const action={
        type: GetCountryConst,
        isClickedCountry,
        data
    }
    return action;
}
