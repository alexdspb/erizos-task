import './App.css'
import Filesystem from './components/Filesystem.jsx';

const data = {
    type: 'folder',
    name: 'Root',
    open: true,
    items: [
        {
            type: 'folder',
            name: 'Folder1',
            open: true,
            items: [
                { type: 'file', name: 'File1', mimeType: 'text/plain' },
                {
                    type: 'folder',
                    name: 'SubFolder1',
                    open: false,
                    items: [
                        { type: 'file', name: 'File2', mimeType: 'text/plain' }
                    ]
                }
            ]
        },
        {
            type: 'folder',
            name: 'Folder2',
            open: false,
            items: [
                { type: 'file', name: 'File3', mimeType: 'text/plain' }
            ]
        },
        { type: 'file', name: 'File0', mimeType: 'text/plain' },
    ]
};

function App() {
  return (
    <>
        <Filesystem data={data} />
    </>
  )
}

export default App
