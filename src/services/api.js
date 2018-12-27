import { users, departaments } from './mock'
import axios from './_axios';

export const getUsers = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(users)
    }, 2000))
}

export const getDepartments = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(departaments)
    }, 1500))
}

export const asyncFindTiposDocumentos = async () => await axios.get(`documentos/findTiposDocumentoByOwner/`);