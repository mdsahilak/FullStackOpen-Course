const Filter = ({ search, setSearch }) => {
    const handleSearchChange = (e => setSearch(e.target.value))

    return (
        <div>
            <input value={search} onChange={handleSearchChange} />
        </div>
    )
}



export default Filter