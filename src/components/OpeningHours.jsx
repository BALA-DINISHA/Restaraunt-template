function OpeningHours() {

    const openingHours = [
        {day: "Monday", time: "11:00 AM - 10:00 PM"},
        {day:"Tuesday", time: "11:00 AM - 10:00 PM"},
        {day:"Wednesday", time: "11:00 AM - 10:00 PM"},
        {day:"Thursday", time: "11:00 AM - 10:00 PM"},
    ]
    return (
     
        <section className="opening-hours">
            <h2>Opening Hours</h2>
            {
                openingHours.map((item)=>
                (
                    <div key={item.day}>
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                    </div>

                ))
            }
        </section>
    )
}
export default OpeningHours;