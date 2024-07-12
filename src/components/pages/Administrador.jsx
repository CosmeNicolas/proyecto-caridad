import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContextDonaciones from "../../context/DonacionesContext";
import { eliminarDonacionApi } from "../../helpers/queries"; 
import Swal from 'sweetalert2';

function Administrador() {
  const { donaciones, donacionesApi } = useContext(ContextDonaciones);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchDonaciones = async () => {
      try {
        await donacionesApi();
      } catch (error) {
        console.error('Error fetching donaciones:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDonaciones();
  }, [donacionesApi]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
  
    if (result.isConfirmed) {
      try {
        await eliminarDonacionApi(id);
       
        const nuevasDonaciones = await donacionesApi();
        setDonaciones(nuevasDonaciones);
        Swal.fire(
          'Eliminada',
          'La donación ha sido eliminada.',
          'success'
        );
      } catch (error) {
        console.error('Error eliminando donación:', error);
        Swal.fire(
          'Error',
          'Hubo un problema al eliminar la donación. Inténtalo de nuevo más tarde.',
          'error'
        );
      }
    }
  };
  const handleEdit = (id) => {
    navigate(`/editarDonacion/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-2 imagen-back">
      <div className="flex justify-around pt-5 w-full">
        <h1 className="text-light text-3xl font-bold">
          Administrador Tucu-Manos
        </h1>
      </div>

      <br />
      <article className="mx-3">
        <div className="tabs-container border-b border-gray-300">
          <div className="flex space-x-4">
            <button className="py-2 px-4 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
              Donaciones
            </button>
            <button className="py-2 px-4 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900">
              Usuarios
            </button>
          </div>
        </div>
        <div className="my-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-center">
            Donaciones
          </h2>
        </div>
        <hr className="my-4" />
        
        {isLoading ? (
          <div className="text-center">Cargando...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localidades</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Contacto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número Contacto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {donaciones && donaciones.length > 0 ? (
                  donaciones.map((donacion) => (
                    <tr key={donacion._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img src={donacion.imagenDonacion} alt="Imagen de donación" className="h-20 w-20 object-cover" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {donacion.nombreDonacion}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donacion.descripcion}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donacion.estado}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donacion.categoria}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donacion.localidades}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donacion.nombrePersona}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {donacion.numeroPersona}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => handleEdit(donacion._id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(donacion._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="px-6 py-4 text-center text-gray-500">
                      No hay donaciones disponibles en este momento.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </article>
    </div>
  );
}

export default Administrador;
