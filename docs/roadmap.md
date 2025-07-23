# Необходимый функционал

Оглавление:
- Allure Test Case
- Allure Test Run
- Allure Test Result
- Allure Project
- Allure Test Plan
- Allure Report
- Allure Trigger

## Allure Test Case

**Функционал:** получение, создание, обновление, удаление тест-кейсов.

**Методы API:**
- GET `/api/testcases`
- POST `/api/testcases`
- PUT `/api/testcases/{id}`
- DELETE `/api/testcases/{id}`

## Allure Test Run

**Функционал:** управление запусками тестов (создание, завершение, получение статуса).

**Методы API:**
- POST `/api/testruns`
- GET `/api/testruns/{id}`
- PUT `/api/testruns/{id}/finish`

## Allure Test Result

**Функционал:** отправка результатов выполнения тестов.

**Методы API:**
- POST `/api/testruns/{id}/results`

## Allure Project

**Функционал:** получение, создание проектов.

**Методы API:**
- GET `/api/projects`
- POST `/api/projects`

## Allure Test Plan

**Функционал:** работа с тест-планами (создание, запуск, связывание с тест-ранами).

**Методы API:**
- GET `/api/testplans`
- POST `/api/testplans`
- POST `/api/testplans/{id}/execute`

## Allure Report

**Функционал:** получение отчетов по результатам тестов.

**Методы API:**
- GET `/api/reports/{testRunId}`
