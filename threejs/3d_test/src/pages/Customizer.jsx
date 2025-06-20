import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import { shirtState, mugState} from '../store';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { ShirtExpander, ColorPicker, CustomButton, FilePicker, Tab } from '../components';

const Customizer = ({ selected }) => {
  const snap = useSnapshot(selected === 'tshirt' ? shirtState : mugState);

  const [file, setFile] = useState('');

  // const [prompt, setPrompt] = useState('');
  // const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker selected={selected}/>
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
          selected={selected}
        />
      case "expand":
        return (
         selected === 'tshirt' ? <ShirtExpander 
          // prompt={prompt}
          // setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit} 
          />
           : 'None'
          )
      default:
        return null;
    }
  }

  // const handleSubmit = async (type) => {
  //   if(!prompt) return alert("Please enter a prompt");

  //   try {
  //     setGeneratingImg(true);

  //     const response = await fetch('http://localhost:8080/api/v1/dalle', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         prompt,
  //       })
  //     })

  //     const data = await response.json();

  //     handleDecals(type, `data:image/png;base64,${data.photo}`)
  //   } catch (error) {
  //     alert(error)
  //   } finally {
  //     setGeneratingImg(false);
  //     setActiveEditorTab("");
  //   }
  // }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    shirtState[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          shirtState.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          shirtState.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        shirtState.isLogoTexture = true;
        shirtState.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                    selected={selected}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            {/* <CustomButton 
              type="filled"
              title="Go Back"
              handleClick={() => shirtState.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            /> */}
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
                selected={selected}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer