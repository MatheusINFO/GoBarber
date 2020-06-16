import {all, takeLatest, call, put} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import api from '~/services/api';
import {updateProfileSucess, updateProfileFailure} from './actions';

export function* updateProfile({payload}){
    try{
        const {name, email, avatar_id, ...rest} = payload.data;

        const profile = Object.assign(
            {name, email, avatar_id},
            rest.oldPassword ? rest : {}
        );

        const response = yield call(api.put, `/users`, profile);

        yield put(updateProfileSucess(response.data));

        toast.success('Perfil atualizado com sucesso!');
    }catch(err){
        toast.error("Erro ao atualizar perfil, confira seus dados!");
        updateProfileFailure();
    }
}

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
