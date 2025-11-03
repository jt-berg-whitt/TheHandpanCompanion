import React from 'react'

export default function Home(){
  return (
    <section aria-labelledby="home-heading">
      <h2 id="home-heading">Welcome to The Handpan Companion's home page!</h2>
      <p>Some text.</p>

      <h3>Quick links</h3>
      <ul>
        <li><strong>About</strong> — Get to know the author and story behind the project</li>
        <li><strong>Book</strong> — Read the book online, or download it in epub and pdf formats.</li>
        <li><strong>Interviews</strong> — conversations with handpanists from around the world about their experiences with and advice about the instrument.</li>
      </ul>

      <p>If you would like to donate to the project, please use the button below to access the secure payment portal.</p>
      <p>I deeply appreciate your donations and hope you enjoy my work! Donations will be reinvested into translation of the materials as well as site upkeep.</p>
    </section>
  )
}
