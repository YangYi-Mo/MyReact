const ListItem = ({item})=>{
    return (
        <div classNameName="list-item" key={item.docid}>
            <section className="s-left"><h4>{item.title}</h4>
            <div className="s-info">
                <span className="s-source">{item.source}</span>
                <span className="s-replyCount">{item.category}</span>
                <span className="s-holder"></span>
                <span className="s-openApp">
                    {item.link}
                </span>
            </div>
            </section>
        </div>

    )
}
export default ListItem


