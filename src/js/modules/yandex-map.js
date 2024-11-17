if (!window.mapInit) {
	window.mapInit = () => {
		const mainMapContainer = document.querySelector(".map-main");
		if (!mainMapContainer) return;

		let pointerIcon = data.pointerIcon,
			zoomDefault = 14,
			options = { suppressMapOpenBlock: true, minZoom: 5, maxZoom: 16 };

		const mainMap = new ymaps.Map(
			mainMapContainer,
			{
				center: [0, 0],
				zoom: zoomDefault,
				controls: [],
			},
			options
		);

		let objectManager = new ymaps.ObjectManager({});

		objectManager.objects.options.set({
			iconLayout: "default#image",
			iconImageHref: pointerIcon,
			iconImageSize: [45, 45],
			balloonMaxWidth: 254,
		});

		objectManager.add(data);

		mainMap.geoObjects.add(objectManager);
		// zoomMargin нужен, если точки при getBounds оказались слишком близко к краю прямоугольника
		mainMap.setBounds(objectManager.getBounds(), { checkZoomRange: true, zoomMargin: 10 }).then(function () {
			if (mainMap.getZoom() > zoomDefault) mainMap.setZoom(zoomDefault);
		});
	};
}
