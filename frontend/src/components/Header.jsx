import React from 'react'


export default function Header(){
return (
<header className="bg-white shadow">
<div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
<h1 className="text-2xl font-bold">Coffeeshop</h1>
<nav>
<a href="#" className="mr-4">Menu</a>
<a href="#">Cart</a>
</nav>
</div>
</header>
)
}
