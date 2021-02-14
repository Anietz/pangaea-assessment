export default function sortItems(data){
        return data.slice().sort((a, b) => b.dateAdded - a.dateAdded);
}