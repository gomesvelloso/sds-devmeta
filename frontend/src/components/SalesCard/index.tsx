import DataPicker from "react-datepicker";
import NotificationButton from "../NotificationButton";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import br from 'date-fns/locale/pt-BR';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../util/request";
import { sale } from "../../models/sale";
registerLocale('br', br);

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate()-365));
    const max = new Date();

    //Nome da constante e função que muda seu valor 
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);
    //constnate para o model sale
    const [sales, setSales] = useState<sale[]>([]);

    //função e uma lista de argumentos;
    useEffect(() => {
    axios.get(`${BASE_URL}/sales`)
        .then(response => {
            setSales(response.data.content);
        });
    }, [])

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                <div className="dsmeta-form-control-container">
                    <DataPicker
                        locale="br"
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DataPicker
                        locale="br"
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                </div>

                <div>
                <table className="dsmeta-sales-table">
                    <thead>
                    <tr>
                        <th className="show992">ID</th>
                        <th className="show576">Data</th>
                        <th>Vendedor</th>
                        <th className="show992">Visitas</th>
                        <th className="show992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map(sale => {
                                return(
                                    <tr key={sale.id}>
                                        <td className="show992">{sale.id}</td>
                                        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton/>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    
                    
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
  }
  
  export default SalesCard
  