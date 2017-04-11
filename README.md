# Spring Boot, Websocket, Stomp & Angular

Refactor of the [Spring Websocket Guide using STOMP](https://spring.io/guides/gs/messaging-stomp-websocket/) to use Angular 2

Checkout this project, or to re-create from scratch:

1. Create new Spring boot initializer project at [https://start.spring.io/]()
    * Add Websocket, Lombok & Devtools _Dependencies_
1. Unpack project to workspace
1. Add code as per the Spring Websocket Guide, with some modifications
    * Condensed `Greeting.java` and `HelloMessage.java` implementations (care of _Lombok_)
    * `WebSocketConfig.java` has amended stomp registry endpoint
    * Refactored web assets for Angular 2, initially created using angular-cli

          cd src/main
          ng new -sg -st ng
          cd ng
          # as per http://devsullo.com/github/angular2-stomp-over-websocket-service/
          npm i --save stompjs
          npm i --save sockjs-client
          npm i --save ng2-stomp-service
          # update typings.d.ts & app.module.ts

## Running

1. Run bootRun Gradle task to launch server (builds ng app too)

        gradle bootRun

1. Point a Browser at http://localhost:8080/

## Continuous ng Build

To continuously build the ng app assets being served by the Spring Boot app

    gradle ngWatch

Or if you launched the Spring Boot application in Eclipse (as Eclipse will be
using the `bin/` folder vs default gradle `build/`):

    gradle ngWatch -PngBuildDir=bin/static

## References

* http://devsullo.com/github/angular2-stomp-over-websocket-service/
* https://spring.io/guides/gs/messaging-stomp-websocket/
