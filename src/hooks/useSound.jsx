import { useState, useEffect, useCallback } from 'react'
import Sound from '../utils/sounds'

const useSound = (soundFilePath) => {
    const [sound, setSound] = useState({ play: () => { } })
    const play = useCallback(() => sound.play(), [sound])

    useEffect(() => {
        setSound(new Sound(soundFilePath))

    }, [soundFilePath])

    return [play]
}

export default useSound