import bcrypt from "bcrypt"

const SALT_ROUNDS = 10

export const generateHash = async (password) => {
    return bcrypt.hash(password, SALT_ROUNDS)
}

export const compareHash = async (password, passwordHash) => {
    return bcrypt.compare(password, passwordHash)
}