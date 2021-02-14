export default function formatCurrency(data){
    return new Intl.NumberFormat("en-US").format(data)+".00";
}