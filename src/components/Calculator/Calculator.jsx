import styles from "./Calculator.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import image from "../../assets/images/calculator.svg";
import { FormService } from "../../core/services/form.service";
import { Button } from "../ui/Button/Button";
import { MultiSelect } from "primereact/multiselect";

export const Calculator = ({ calcRef }) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useRef(null);

  const load = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Aplikacja wysłana pomyślnie",
      detail: `Droga ${getValues(
        "name"
      )}, nasz specjalista wkrótce się z Tobą skontaktuje`,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "błąd",
      detail:
        "Spróbuj ponownie później lub skontaktuj się z nami w dogodny dla Ciebie sposób",
    });
  };

  const defaultValues = {
    name: "",
    phone: "",
    options: null,
  };

  const options = [
    { option: "Wymiana szyby" },
    { option: "Wyeliminuj dmuchanie okien" },
    { option: "Wyeliminuj zaparowanie okna" },
    { option: "Eliminacja ugięcia skrzydeł okiennych" },
    { option: "Wymiana uszczelki" },
    { option: "Regulacja okuć" },
    { option: "Naprawa armatury" },
    { option: "Wymiana starych okuć na nowe" },
    { option: "Wymiana klamek okiennych" },
    { option: "Montaż moskitier" },
    { option: "Wymiana parapetu" },
  ];

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ defaultValues });

  const getFormErrorMessage = (error) => {
    return errors[error] ? (
      <small className="p-error">{errors[error].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const onSubmit = async (data) => {
    load();
    console.log(data);
    try {
      await FormService.send(data);
      setTimeout(() => {
        showSuccess();
        reset();
      }, 1000);
      console.log(data);
    } catch (error) {
      setTimeout(() => {
        showError();
      }, 1000);
      console.log(error);
    }
  };

  return (
    <section ref={calcRef} className={styles.consult}>
      <h2 className={styles.title}>Kalkulacja kosztów naszych usług</h2>
      <div className={styles.wrapper}>
        <img className={styles.img} src={image} alt="#" />
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>
            Wypełnij formularz już teraz i uzyskaj szczegółową kalkulację
            kosztów naszej pracy
          </p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.flex}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Wpisz swoje imię" }}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label
                      htmlFor={field.name}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        id={field.name}
                        value={field.value}
                        className={classNames(
                          { "p-invalid": fieldState.error },
                          styles.input
                        )}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label
                        style={{ color: "var(--dark)" }}
                        htmlFor={field.name}
                      >
                        Imię
                      </label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </div>
                )}
              />
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Wprowadź swój numer telefonu" }}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label
                      htmlFor={field.phone}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputMask
                        className={classNames(
                          { "p-invalid": fieldState.error },
                          styles.input
                        )}
                        onChange={(e) => field.onChange(e.target.value)}
                        id={field.phone}
                        value={field.value}
                        mask="+48 (999) 999-999"
                      />
                      <label
                        style={{ color: "var(--dark)" }}
                        htmlFor={field.phone}
                      >
                        Telefon
                      </label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </div>
                )}
              />
            </div>

            <Controller
              name="options"
              control={control}
              render={({ field }) => (
                <MultiSelect
                  id={field.options}
                  name="options"
                  value={field.value}
                  options={options}
                  onChange={(e) => field.onChange(e.value)}
                  optionLabel="option"
                  placeholder="Wybierz usługi"
                  maxSelectedLabels={20}
                  className={styles.multiselect}
                />
              )}
            />
            <Button
              isLoading={isLoading}
              type="submit"
              btnText="Otrzymaj rabat 15%"
            />
          </form>
          <p className={styles.warning}>
            *** 15% rabatu obowiązuje przy łącznej kwocie zamówienia 300 PLN.
          </p>
        </div>
      </div>
      <Toast ref={toast} />
    </section>
  );
};
