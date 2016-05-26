export default ngModule => {

	if(ON_TEST){
		require('./kcd-hello.test')(ngModule);
	}

	ngModule.directive('kcdHello', function($log) {
		require('./kcd-hello.styl');
		return {
			restrict: 'E',
			scope: {},
			// no need to use templateUrl with webpack template: require('./kcd-hello.html')
			//  no more templateCache or XHRs firing off to go get your templates
			template: require('./kcd-hello.html'),
			controllerAs: 'vm',
			controller: /*@ngInject*/ function(){
				const vm = this;

				vm.greeting = 'Hello Webpack';
				$log.info('I have some info');
			}
		};
	});
};