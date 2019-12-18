import React from 'react'

const cityList = ["Ylöjärvi", "Vihti", "Varkaus", "Vantaa", "Valkeakoski", "Vaasa", "Uusikaupunki", "Tuusula", "Turku", "Tornio", "Tampere", "Siilinjärvi", "Sipoo", "Seinäjoki", "Savonlinna", "Salo", "Rovaniemi", "Riihimäki", "Rauma", "Raisio", "Raahe", "Pori", "Pirkkala", "Oulu", "Nurmijärvi", "Nokia", "Mikkeli", "Mäntsälä", "Lohja", "Lieto", "Lempäälä", "Laukaa", "Lappeenranta", "Lahti", "Kirkkonummi", "Kuusankoski", "Kuusamo", "Kuopio", "Kouvola", "Kotka", "Mustasaari", "Kokkola", "Kerava", "Kemi", "Karhula", "Kangasala", "Kajaani", "Kaarina", "Jyväskylä", "Joensuu", "Järvenpää", "Janakkala", "Jämsä", "Pietarsaari", "Imatra", "Iisalmi", "Hyvinkää", "Hollola", "Helsinki", "Heinola", "Haukipudas", "Hamina", "Hämeenlinna", "Forssa", "Espoo", "Porvoo", "Anjala"]

const matches = (text) => cityList.filter(item => item.toUpperCase().includes(text.toUpperCase()))

const MatchList = ({ search, setCity }) => {

  const listItems = (list) => list.map(item => <li onClick={() => setCity(item)} key={item} className='list-group-item list-group-item-action'>{item}</li>)  
  const allMatches = matches(search)

  if (search === '') {
    return <p>Etsi kaupunkeja kirjoittamalla kaupungin nimi hakukenttään.</p>
  }

  if (allMatches.length > 10) {
    return <p>Liian monta osumaa, tarkenna hakua.</p>
  }

  if (allMatches.length === 0) {
    return <p>Ei kaupunkeja antamallasi hakuehdolla.</p>
  }

  return <div>Tarkoititko: <ul className='list-group'>{listItems(matches(search))}</ul></div>
}

export default MatchList