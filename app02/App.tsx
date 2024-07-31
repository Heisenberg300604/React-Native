import { View, 
  Text,
  ScrollView,
  SafeAreaView,
 } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard title="India Gate" label='New Delhi, India'
      description= 'India gate is one of the best monument in india that is located in the captial city of New Delhi.It is a very important heritage site in our country. Resembles with Notre Dame in France.' time={15}
      image='https://imgs.search.brave.com/P2-U7tQoBUjAmKFXmnM12clXvvllfc6E-ddcjdCrxsM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2OTc3MzA0/MjkyMDEtMzgxYjcx/ZjYxNDI3P3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/Tlh4OGJtVjNKVEl3/WkdWc2FHa2xNakJw/Ym1ScFlYeGxibnd3/Zkh3d2ZIeDhNQT09.jpeg '/>
      <FancyCard title= "Taj Mahal" label='Agra, India'
      description= 'The Taj Mahal is one of the most iconic monuments in India, located in Agra. It is a symbol of love built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. This stunning white marble mausoleum is a UNESCO World Heritage site and attracts millions of visitors annually.' time={200}
      image='https://imgs.search.brave.com/KaD57z2Fguq_9z4-ewnW29zLefTiPD3MVJ9iQkbbxj4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQz/MDUwNDI0L3Bob3Rv/L3Rhai1tYWhhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/d0Flbl9peUlOLUY3/a3lROFNuMnNSNjdl/VFpkUlFSdXFCUmtO/ZWpOODlqND0'/>
      <ActionCard/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App        
    