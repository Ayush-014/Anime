import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Review() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="bg-gradient-to-b from-[#ffffff4d] to-gray-600 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Review Section</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="userId" className="block text-sm font-semibold leading-6 text-gray-900">
              User_Id
            </label>
            <div className="mt-2.5 hover:scale-105 duration-500">
              <input
                type="text"
                name="userId"
                id="userId"
                autoComplete="userId"
                required
                className="block w-full rounded-md border-0 px-2.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="emailId" className="block text-sm ml-6 font-semibold leading-6 text-gray-900">
              Email_Id
            </label>
            <div className="mt-2.5 hover:scale-105 duration-500">
              <input
                type="email"
                name="emailId"
                id="emailId"
                autoComplete="emailId"
                required
                className="block w-full rounded-md border-0 px-2.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="rating" className="block text-sm font-semibold leading-6 text-gray-900">
              Rating
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="rating" className="sr-only">
                  Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                
              </div>
              <input
                type="number"
                name="rating"
                id="rating"
                autoComplete="tel"
                className="block hover:scale-105 duration-500 w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="review" className="block text-sm font-semibold leading-6 text-gray-900">
              Review
            </label>
            <div className="mt-2.5">
              <textarea
                name="review"
                id="review"
                required
                rows={4}
                className="block hover:scale-105 duration-500 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block hover:scale-110 duration-500 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
