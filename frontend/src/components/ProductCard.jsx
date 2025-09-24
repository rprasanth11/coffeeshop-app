import React from 'react'


export default function ProductCard({p}){
// image served from /assets/images/<filename>
const imgSrc = `/src/assets/images/${p.image_filename}`
return (
<div className="bg-white rounded-2xl shadow p-4">
<img src={imgSrc} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-3" />
<h3 className="font-semibold">{p.name}</h3>
<p className="text-sm text-gray-500">{p.description}</p>
<div className="mt-2 font-bold">₹{p.price}</div>
</div>
)
}
