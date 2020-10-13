/**
 *  RxJS in Action
 *  Listing 2.4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const OFFSET = 3000
const SPEED = 50

const increase = (observer) => {
	let inc = 0
	setInterval(
		() => (inc <= 100 ? observer.next(inc++) : observer.complete()),
		SPEED
	)
}

const progressBar$ = new rxjs.Observable((observer) => {
	setTimeout(() => increase(observer), OFFSET)
})

//--------------------------------------------------//
//                Usage                             //
//--------------------------------------------------//
window.onload = function() {
  const label = document.querySelector('#progress-indicator');
  progressBar$
    .subscribe(
      val => label.textContent = (Number.isInteger(val) ? val + "%" : val),
      error => console.log(error.message),
      () => label.textContent = 'Complete!'
    );
};
