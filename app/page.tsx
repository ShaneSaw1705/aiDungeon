'use client'

import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    charName: '',
    race: 'Human',
    class: 'Barbarian',
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  })

  function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function handleRoll(e) {
    e.preventDefault()
    const { name } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: getRandomNumber(3, 18),
    }))
    console.log(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData)
  }

  return (
    <div className="relative bottom-0 right-0 left-0 w-[795px] bg-[#6d6d6d] text-center h-[775px] m-auto mt-[70px] align-bottom rounded-md bg-opacity-50">
      <h2>D&D Character Creator</h2>
      <div className="">
        <form onSubmit={handleSubmit}>
          <label htmlFor="charName">Character Name:</label>
          <input
            type="text"
            id="charName"
            className="text-black w-full p-2 mb-2 box-border rounded"
            name="charName"
            value={formData.charName}
            onChange={handleChange}
            required
          />

          <label htmlFor="race">Race:</label>
          <select
            id="race"
            name="race"
            className="text-black w-full p-2 mb-2 box-border rounded"
            value={formData.race}
            onChange={handleChange}
            required
          >
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Halfling">Halfling</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Half-Elf">Half-Elf</option>
            <option value="Half-Orc">Half-Orc</option>
            <option value="Tiefling">Tiefling</option>
          </select>

          <label htmlFor="class">Class:</label>
          <select
            id="class"
            name="class"
            className="text-black w-full p-2 mb-2 box-border rounded"
            value={formData.class}
            onChange={handleChange}
            required
          >
            <option value="Barbarian">Barbarian</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Druid">Druid</option>
            <option value="Fighter">Fighter</option>
            <option value="Monk">Monk</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Warlock">Warlock</option>
            <option value="Wizard">Wizard</option>
          </select>
          <button type="button" onClick={handleRoll} name="strength">
            Roll Strength
          </button>
          <p>{formData.strength}</p>
          <button type="button" onClick={handleRoll} name="dexterity">
            Roll Dexterity
          </button>
          <p>{formData.dexterity}</p>
          <button type="button" onClick={handleRoll} name="constitution">
            Roll Constitution
          </button>
          <p>{formData.constitution}</p>
          <button type="button" onClick={handleRoll} name="intelligence">
            Roll Intelligence
          </button>
          <p>{formData.intelligence}</p>
          <button type="button" onClick={handleRoll} name="wisdom">
            Roll Wisdom
          </button>
          <p>{formData.wisdom}</p>
          <button type="button" onClick={handleRoll} name="charisma">
            Roll Charisma
          </button>
          <p>{formData.charisma}</p>
          <button type="submit">Create Character</button>
        </form>
      </div>
    </div>
  )
}
