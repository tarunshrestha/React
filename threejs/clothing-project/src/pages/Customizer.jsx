import React from 'react'
import { useSnapshot } from 'valtio';
import state from '../store';
import { AnimatePresence, motion } from 'framer-motion';
import { slideAnimation } from '../config/motion';
import { EditorTabs, FilterTabs } from '../config/constants';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import { useState } from 'react';
import { logoShirt, stylishShirt } from '../assets';

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState('');

  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({logoShirt:true, stylishShirt:false});

  // show tab content
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case 'colorpicker': return <ColorPicker/>
      case 'filepicker': 
        return <FilePicker 
        file={file} 
        setFile={setFile}
        readFile={readFile}
        />
      case 'aipicker': return <AIPicker />
      default: return null;
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }
  
   const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          // state.isLogoTexture = !activeFilterTab[tabName];
          state.isLogoTexture = true;
          state.isFullTexture = false;
        break;
      case "stylishShirt":
          state.isFullTexture = true;
          state.isLogoTexture = false;
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    })
  } 

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div 
          key='custom' 
          className="absolute top-0 left-0 z-10"
          {...slideAnimation('left')}
        >
          <div className='flex items-center min-h-screen'>
            <div className='editortabs-container tabs'>
              {EditorTabs.map((tab) => (
                <Tab 
                key={tab.name}
                tab={tab}
                handleClick={() => setActiveEditorTab(tab.name)}
                />
              ))}
              {generateTabContent()}
            </div>
          </div>

        </motion.div>
        <motion.div className='absolute z-10 top-5 right-5'>
          <CustomButton
          type="filled"
          title="Go Back"
          handleClick={() => state.intro = true}
          customStyle='w-fit px-4 py-2.5 font-bold text-sm'
          />
        </motion.div>

        <motion.div className='filtertabs-container' {...slideAnimation('up')}>
            {FilterTabs.map((tab) => (
                <Tab 
                key={tab.name}
                tab={tab}
                isFilterTab
                // isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
                />
              ))}
        </motion.div>

        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer