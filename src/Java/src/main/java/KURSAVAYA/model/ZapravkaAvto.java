package KURSAVAYA.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KURSAVAYA.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаправкаАвто
 */
@Entity(name = "IISKURSAVAYAЗаправкаАвто")
@Table(schema = "public", name = "ЗаправкаАвто")
public class ZapravkaAvto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КолТоплива")
    private Integer колтоплива;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kolonka")
    @Convert("Kolonka")
    @Column(name = "Колонка", length = 16, unique = true, nullable = false)
    private UUID _kolonkaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kolonka", insertable = false, updatable = false)
    private Kolonka kolonka;


    public ZapravkaAvto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКолТоплива() {
      return колтоплива;
    }

    public void setКолТоплива(Integer колтоплива) {
      this.колтоплива = колтоплива;
    }


}