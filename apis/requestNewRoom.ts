const joinRoom = async (containerUid: string) => {
    const url = 'http://localhost:8080/api/newRoom';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ containerUid }),
          });

        if (!response.ok) {
            throw new Error('Request failed');
        }
      
        const data = await response.json();
        return data.data.index;
    } catch (error) {
        console.log(error);
    }
};

export default joinRoom;