        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0e6ef); 

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(5, 5, 8);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xf0e6ef, 1); 
        document.body.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(5, 10, 5);
        scene.add(directionalLight);

        // Suelo
        const floorGeometry = new THREE.BoxGeometry(10, 0.1, 10);
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xe0a0c0 }); 
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.position.y = -0.05;
        scene.add(floor);

        // Pared trasera
        const backWallGeometry = new THREE.BoxGeometry(10, 6, 0.1);
        const backWallMaterial = new THREE.MeshStandardMaterial({ color: 0xd8b0c8 }); 
        const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial);
        backWall.position.set(0, 3, -5);
        scene.add(backWall);

        // Pared lateral derecha
        const rightWallGeometry = new THREE.BoxGeometry(0.1, 6, 10);
        const rightWall = new THREE.Mesh(rightWallGeometry, backWallMaterial);
        rightWall.position.set(5, 3, 0);
        scene.add(rightWall);

        // Pared lateral izquierda
        const leftWallGeometry = new THREE.BoxGeometry(0.1, 6, 10);
        const leftWallMaterial = new THREE.MeshStandardMaterial({ color: 0xd8b0c8 });
        const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
        leftWall.position.set(-5, 3, 0);
        scene.add(leftWall);
        
        // Ventana
        const windowWidth = 3;
        const windowHeight = 2.5;
        const windowMaterial = new THREE.MeshBasicMaterial({ color: 0xccffff, opacity: 0.7, transparent: true }); 
        const windowFrameMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); 

        // Cristal
        const windowGlassGeometry = new THREE.PlaneGeometry(windowWidth, windowHeight);
        const windowGlass = new THREE.Mesh(windowGlassGeometry, windowMaterial);
        windowGlass.position.set(0, 3, -4.95); 
        scene.add(windowGlass);

        // Cama
        const bedBaseGeometry = new THREE.BoxGeometry(2.5, 0.5, 4);
        const bedBaseMaterial = new THREE.MeshStandardMaterial({ color: 0xcc6699 });
        const bedBase = new THREE.Mesh(bedBaseGeometry, bedBaseMaterial);
        bedBase.position.set(-3, 0.25, -2);
        scene.add(bedBase);

        const bedMattressGeometry = new THREE.BoxGeometry(2.3, 0.3, 3.8); //Colchón
        const bedMattressMaterial = new THREE.MeshStandardMaterial({ color: 0xf0d0e0 });
        const bedMattress = new THREE.Mesh(bedMattressGeometry, bedMattressMaterial);
        bedMattress.position.set(-3, 0.6, -2);
        scene.add(bedMattress);

        const bedHeadboardGeometry = new THREE.BoxGeometry(2.5, 1.5, 0.2); //Cabecero
        const bedHeadboardMaterial = new THREE.MeshStandardMaterial({ color: 0xcc6699 });
        const bedHeadboard = new THREE.Mesh(bedHeadboardGeometry, bedHeadboardMaterial);
        bedHeadboard.position.set(-3, 1, -3.9);
        scene.add(bedHeadboard);

        // Almohada
        const pillowGeometry = new THREE.BoxGeometry(1.2, 0.2, 0.8);
        const pillowMaterial = new THREE.MeshStandardMaterial({ color: 0xe0a0c0  });
        const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
        pillow.position.set(-3, 0.8, -3.2);
        scene.add(pillow);

        // Sofá
        const sofaBaseGeometry = new THREE.BoxGeometry(3, 0.5, 1.5); //Base
        const sofaBaseMaterial = new THREE.MeshStandardMaterial({ color: 0xcc6699 });
        const sofaBase = new THREE.Mesh(sofaBaseGeometry, sofaBaseMaterial);
        sofaBase.position.set(2, 0.25, 3);
        scene.add(sofaBase);

        const sofaSeatGeometry = new THREE.BoxGeometry(2.8, 0.3, 1.3); //Silla
        const sofaSeatMaterial = new THREE.MeshStandardMaterial({ color: 0xf0d0e0 });
        const sofaSeat = new THREE.Mesh(sofaSeatGeometry, sofaSeatMaterial);
        sofaSeat.position.set(2, 0.6, 3);
        scene.add(sofaSeat);

        const sofaBackGeometry = new THREE.BoxGeometry(2.8, 1, 0.2); //Espaldar
        const sofaBack = new THREE.Mesh(sofaBackGeometry, sofaBaseMaterial);
        sofaBack.position.set(2, 1.2, 3.6);
        scene.add(sofaBack);

        //Mesa de centro
        const nightstandTopGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 32); //Superficie
        const nightstandTopMaterial = new THREE.MeshStandardMaterial({ color: 0xcc6699 });
        const nightstandTop = new THREE.Mesh(nightstandTopGeometry, nightstandTopMaterial);
        nightstandTop.position.set(2, 0.8, 1); 
        scene.add(nightstandTop);

        const nightstandLegGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.7, 16); //Base
        const nightstandLegMaterial = new THREE.MeshStandardMaterial({ color: 0xf0d0e0 });
        const nightstandLeg = new THREE.Mesh(nightstandLegGeometry, nightstandLegMaterial);
        nightstandLeg.position.set(2, 0.35, 1);
        scene.add(nightstandLeg);

        // Puerta
        const doorWidth = 1.5; const doorHeight = 3; const doorThickness = 0.1;
        const doorFrameMaterial = new THREE.MeshStandardMaterial({ color: 0x884466 });
        
        const topFrameGeometry = new THREE.BoxGeometry(doorWidth + 0.2, 0.2, doorThickness);//Marco
        const topFrame = new THREE.Mesh(topFrameGeometry, doorFrameMaterial);
        topFrame.position.set(3, doorHeight + 0.1, -4.9);
        scene.add(topFrame);

        const leftFrameGeometry = new THREE.BoxGeometry(0.2, doorHeight + 0.2, doorThickness);//Marco
        const leftFrame = new THREE.Mesh(leftFrameGeometry, doorFrameMaterial);
        leftFrame.position.set(3 - doorWidth / 2 - 0.1, doorHeight / 2, -4.9);
        scene.add(leftFrame);

        const rightFrameGeometry = new THREE.BoxGeometry(0.2, doorHeight + 0.2, doorThickness); //Marco
        const rightFrame = new THREE.Mesh(rightFrameGeometry, doorFrameMaterial);
        rightFrame.position.set(3 + doorWidth / 2 + 0.1, doorHeight / 2, -4.9);
        scene.add(rightFrame);

        const doorGeometry = new THREE.BoxGeometry(doorWidth, doorHeight, 0.05);//Puerta
        const doorMaterial = new THREE.MeshStandardMaterial({ color: 0xffa0c0 });
        const door = new THREE.Mesh(doorGeometry, doorMaterial);
        door.position.set(3, doorHeight / 2, -4.85);
        scene.add(door);

        const handleGeometry = new THREE.SphereGeometry(0.1, 16, 16); //Perilla
        const handleMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.position.set(3 + doorWidth / 2 - 0.2, doorHeight / 2, -4.8);
        scene.add(handle);

        // Tocador
        const vanityColor = 0xcc6699; 

        const vanityTableTopGeometry = new THREE.BoxGeometry(2.5, 0.1, 1); //Mesa
        const vanityTableTop = new THREE.Mesh(vanityTableTopGeometry, new THREE.MeshStandardMaterial({ color: vanityColor }));
        vanityTableTop.position.set(-4.5, 1.2, 3.5); 
        vanityTableTop.rotation.y = Math.PI / 2;
        scene.add(vanityTableTop);

        const vanitySideBlockGeometry = new THREE.BoxGeometry(0.8, 1.1, 1); //Partes laterales
        const vanitySideBlockMaterial = new THREE.MeshStandardMaterial({ color: vanityColor });

        const vanityLeftBlock = new THREE.Mesh(vanitySideBlockGeometry, vanitySideBlockMaterial);
        vanityLeftBlock.position.set(-4.5, 0.55, 3.5 - 0.85); 
        vanityLeftBlock.rotation.y = Math.PI / 2;
        scene.add(vanityLeftBlock);

        const vanityRightBlock = new THREE.Mesh(vanitySideBlockGeometry, vanitySideBlockMaterial);
        vanityRightBlock.position.set(-4.5, 0.55, 3.5 + 0.85);
        vanityRightBlock.rotation.y = Math.PI / 2;
        scene.add(vanityRightBlock);

        const stoolSeatGeometry = new THREE.BoxGeometry(0.8, 0.1, 0.8); //Silla
        const stoolSeat = new THREE.Mesh(stoolSeatGeometry, new THREE.MeshStandardMaterial({ color: 0xffffff })); 
        stoolSeat.position.set(-3.8, 0.45, 3.5);
        scene.add(stoolSeat);

        const stoolLegsGeometry = new THREE.BoxGeometry(0.7, 0.4, 0.7); 
        const stoolLegs = new THREE.Mesh(stoolLegsGeometry, new THREE.MeshStandardMaterial({ color: vanityColor }));
        stoolLegs.position.set(-3.8, 0.2, 3.5);
        scene.add(stoolLegs);

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
