const SubMenuComp = ({ data, setSubMenuId }) => {

    return (
        <div className='flex items-center gap-4'>
            {data.map((d, i) => (
                <div key={i} onClick={() => setSubMenuId(d.id)} className='cursor-pointer'>
                    <h2>{d.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default SubMenuComp