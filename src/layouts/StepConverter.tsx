import stepList from '../assets/stepList.json'

export const StepConverter = () => {
  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Stegkonverterare</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='container mt-3'>
                <div className='row mb-1'>
                  <h5 className='col-7'>Aktivitet 30min</h5>
                  <h5 className='col-5'>Antal steg</h5>
                </div>
                {Object.entries(stepList).map(([activity, steps]) => (
                  <li className='border' key={activity} style={{ listStyle: "none" }}>
                    <div className='row p-1'>
                      <p className='col-7 mb-0'>{activity}</p>
                      <p className='col-5 mb-0'>{steps} steg</p>
                    </div>
                  </li>
                ))}

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Stäng</button>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}
