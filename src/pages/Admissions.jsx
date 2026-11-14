import React from 'react'

const input =
  "w-full rounded-lg border border-deep/20 bg-white px-4 py-3 text-deep focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
const label = "mb-1.5 block text-sm font-semibold text-deep"
const card = "rounded-2xl border border-deep/10 bg-white p-6 shadow-sm md:p-8"
const stepHead = "mb-6 flex items-center gap-3"
const stepNo = "grid h-7 w-7 place-items-center rounded-full bg-green-500 font-bold text-white"

const Admissions = () => {
  return (
    <div className="bg-cloud">
      <div className="bg-deep text-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h2 className="text-3xl text-center text-[#183D43] font-bold md:text-4xl">Online Admission Form</h2>
          <h4 className="mt-2 text-lg text-center text-gray-600">Complete the form below to apply for admission</h4>
        </div>
      </div>

      <form className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10 ]">
        {/* Start */}
        <div className={card}>
          <div className={stepHead}>
            <span className={stepNo}>1</span>
            <h4 className="text-xl font-bold text-deep">Personal Information</h4>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={label}>Name:</label>
              <input className={input} type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="fatherName" className={label}>Father's Name:</label>
              <input className={input} type="text" id="fatherName" name="fatherName" required />
            </div>
            <div>
              <label htmlFor="email" className={label}>Email:</label>
              <input className={input} type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="phone" className={label}>Phone:</label>
              <input className={input} type="tel" id="phone" name="phone" placeholder="03XX XXXXXXX" required />
            </div>
            <div>
              <label htmlFor="cnic" className={label}>CNIC:</label>
              <input className={input} type="text" id="cnic" name="cnic" placeholder="00000-0000000-0" required />
            </div>
            <div>
              <label htmlFor="datebirth" className={label}>Date of Birth:</label>
              <input className={input} type="date" id="datebirth" name="datebirth" required />
            </div>
            <div>
              <label htmlFor="qualification" className={label}>Qualification:</label>
              <input className={input} type="text" id="qualification" name="qualification" required />
            </div>
            <div>
              <label htmlFor="address" className={label}>Address:</label>
              <input className={input} type="text" id="address" name="address" required />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="uploadpicture" className={label}>Upload picture:</label>
              <input
                type="file" id="uploadpicture" name="uploadpicture" accept="image/*" required
                className="block w-full text-sm text-deep file:mr-4 file:rounded-lg file:border-0 file:bg-mint file:px-4 file:py-2.5 file:font-semibold file:text-deep hover:file:bg-brand hover:file:text-white"
              />
            </div>
          </div>
        </div>

        {/* center*/}
        <div className={card}>
          <div className={stepHead}>
            <span className={stepNo}>2</span>
            <h4 className="text-xl font-bold text-deep">Course & Location Selection</h4>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label htmlFor="course" className={label}>Select Course:</label>
              <select className={input} id="course" name="course" required defaultValue="">
                <option value="" disabled>--Select a course--</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="choiceClass" className={label}>Choice of Class:</label>
              <select className={input} id="choiceClass" name="choiceClass" required defaultValue="">
                <option value="" disabled>--Select a class--</option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
                <option value="class3">Class 3</option>
              </select>
            </div>
            <div>
              <label htmlFor="branch" className={label}>Branch:</label>
              <select className={input} id="branch" name="branch" required defaultValue="">
                <option value="" disabled>--Select a branch--</option>
                <option value="branch1">Branch 1</option>
                <option value="branch2">Branch 2</option>
                <option value="branch3">Branch 3</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="additionalInfo" className={label}>Additional information (optional):</label>
              <textarea className={input} id="additionalInfo" name="additionalInfo" rows={4} />
            </div>
          </div>
        </div>

        {/* laast */}
        <div className={card}>
          <div className={stepHead}>
            <span className={stepNo}>3</span>
            <h4 className="text-xl font-bold text-deep">Payment Information</h4>
          </div>
          <p className="rounded-lg bg-mint p-4 text-sm text-deep">
            Add your account number or payment instructions here.
          </p>
        </div>

        <button
          type="submit"
          className="rounded-xl bg-brand px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-deep"
        >
          Submit application
        </button>
      </form>
    </div>
  )
}

export default Admissions