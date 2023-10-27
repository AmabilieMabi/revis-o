import React from 'react'
import '../ProfileImagens.css'

const ProfileImagens = ({titulo, imagem, alt , nome, descricao, preco, caracteristicas}) => {
    return (
    <div className="card">
    <h2 className='titulo'> {titulo} </h2>
    <img src={imagem} alt={alt} className='teste'/> 
    <p className='descricao'>{descricao}</p>
    <p className='nome'>{nome}</p>
    <p className='preco'>{preco}</p>
    </div>
)}

export default ProfileImagens